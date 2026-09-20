import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bl11rg_jj {
  fill: currentColor;
  d: path("M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-6.031c.337-.298.641-.634.905-1H24.5a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 24.5 4h-17A3.5 3.5 0 0 0 4 7.5v5.126a6 6 0 0 0-1 .905zM7.5 13A4.5 4.5 0 0 0 3 17.5v7A4.5 4.5 0 0 0 7.5 29h7a4.5 4.5 0 0 0 4.5-4.5v-7a4.5 4.5 0 0 0-4.5-4.5zM4 17.5A3.5 3.5 0 0 1 7.5 14h7a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 4 24.5z");
}
</style><path class="bl11rg_jj"/>`,
		"fallback": "fluent:breakout-room-32-light",
	});
}

export default Component;
