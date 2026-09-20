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
		"content": `<style>.p4ya45stj {
  fill: currentColor;
  d: path("M11.5 13.77h1v-5h-1zm.5 2.922q.31 0 .52-.21t.21-.52t-.21-.52t-.52-.211t-.52.21t-.21.52t.21.52t.52.211M8.695 21q-.352 0-.581-.232q-.23-.233-.23-.576V5.288q0-.343.232-.575t.575-.232h1.616V3h3.384v1.48h1.62q.344 0 .574.233q.23.232.23.576v14.903q0 .344-.233.576t-.575.232zm.189-1h6.23V5.462h-6.23zm0 0h6.23z");
}
</style><path class="p4ya45stj"/>`,
		"fallback": "material-symbols-light:battery-alert-outline",
	});
}

export default Component;
