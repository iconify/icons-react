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
		"content": `<style>.eg_g5ui9o {
  fill: currentColor;
  d: path("M6 5.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H11a.5.5 0 0 1 0-1h.468a2 2 0 0 0-.933-.25a2 2 0 0 0-1.45.586a.5.5 0 0 1-.706-.707A3 3 0 0 1 12 3.152V3a.5.5 0 0 1 .5-.5m-.876 5.532A3 3 0 0 1 9 7.848V8a.5.5 0 0 1-1 0V6.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 0 1h-.468a2 2 0 0 0 2.382-.336a.5.5 0 1 1 .707.707a3 3 0 0 1-.997.66M10.5 11q.088 0 .174-.003H12a1 1 0 0 0 .89-.542q.6-.29 1.11-.712v.254a2 2 0 0 1-2 2h-1.997V13h1.5a.5.5 0 1 1 0 1H4.505a.5.5 0 0 1 0-1h1.499v-1.003H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2.257A5.5 5.5 0 0 0 5.6 3H4a1 1 0 0 0-1 1v5.997a1 1 0 0 0 1 1h6.326q.086.003.174.003m-1.497.997H7.005V13h1.998z");
}
</style><path class="eg_g5ui9o"/>`,
		"fallback": "fluent:desktop-sync-16-regular",
	});
}

export default Component;
