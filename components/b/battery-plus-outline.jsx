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
		"content": `<style>.t58reha8k {
  fill: currentColor;
  d: path("M8.692 21q-.343 0-.575-.232t-.233-.576V5.288q0-.343.233-.575t.575-.232h1.616V3h3.384v1.48h1.62q.344 0 .574.233q.23.232.23.576v6.903q-.275.039-.516.088t-.484.128V5.462H8.885V20h2.561q.104.287.228.527t.293.473zm7.693 0v-2.616h-2.616v-1h2.615V14.77h1v2.615H20v1h-2.616V21z");
}
</style><path class="t58reha8k"/>`,
		"fallback": "material-symbols-light:battery-plus-outline",
	});
}

export default Component;
