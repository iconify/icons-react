import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ipgiz4bdq {
  fill: currentColor;
  d: path("M8.696 21q-.352 0-.581-.232q-.23-.233-.23-.576V5.288q0-.343.232-.575t.575-.232h1.616V3h3.384v1.48h1.62q.344 0 .574.233q.23.232.23.576v2.653h-1v-2.48H8.885V20h6.23v-1.942h1v2.134q0 .343-.232.576t-.575.232zm1.958-4.5v-2.384q0-.667.474-1.141q.475-.475 1.141-.475h4.714l-2.075-2.1l.708-.688L18.904 13l-3.288 3.288l-.714-.713l2.1-2.075h-4.733q-.269 0-.442.173t-.173.443V16.5z");
}
</style><path class="ipgiz4bdq"/>`,
		"fallback": "material-symbols-light:battery-share",
	});
}

export default Component;
