import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lxj-h5drf {
  fill: currentColor;
  d: path("M15 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L9.5 6.293l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708M10.5 11q.088 0 .174-.003H12a1 1 0 0 0 .89-.542q.6-.29 1.11-.712v.254a2 2 0 0 1-2 2h-1.997v1.01h1.5a.5.5 0 1 1 0 1l-6.997.001a.5.5 0 0 1 0-1h1.499v-1.01H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2.257A5.5 5.5 0 0 0 5.6 3H4a1 1 0 0 0-1 1v5.997a1 1 0 0 0 1 1h6.326q.086.003.174.003m-1.497.997H7.005v1.011h1.998z");
}
</style><path class="lxj-h5drf"/>`,
		"fallback": "fluent:desktop-checkmark-16-regular",
	});
}

export default Component;
