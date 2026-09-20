import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nzozboggm {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708L6.36 7.067a1 1 0 1 0 .574.574l3.426 3.425A1 1 0 0 0 9 12a1 1 0 1 0 1.934-.36l6.212 6.214a.5.5 0 0 0 .708-.708zM15 12c0 .245-.088.47-.235.644l-1.409-1.41A1 1 0 0 1 15 12m-4-4c0 .245-.088.47-.235.644l-1.409-1.41A1 1 0 0 1 11 8M7 4c0 .245-.088.47-.235.644l-1.409-1.41A1 1 0 0 1 7 4m0 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="nzozboggm"/>`,
		"fallback": "fluent:dialpad-off-20-regular",
	});
}

export default Component;
