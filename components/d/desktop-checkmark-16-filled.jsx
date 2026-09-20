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
		"content": `<style>.r85y9ebau {
  fill: currentColor;
  d: path("M15 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L9.5 6.293l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708M10.5 11c1.33 0 2.55-.472 3.501-1.258v.755a1.5 1.5 0 0 1-1.5 1.5h-2.5V13h1.5a.5.5 0 1 1 0 1H4.495a.5.5 0 0 1 0-1H6v-1.003H3.501a1.5 1.5 0 0 1-1.5-1.5V3.5a1.5 1.5 0 0 1 1.5-1.5h2.756a5.5 5.5 0 0 0 4.243 9m-1.5.997H7V13h2z");
}
</style><path class="r85y9ebau"/>`,
		"fallback": "fluent:desktop-checkmark-16-filled",
	});
}

export default Component;
