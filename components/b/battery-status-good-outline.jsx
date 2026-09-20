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
		"content": `<style>.aq1v00arl {
  fill: currentColor;
  d: path("m15.95 20.464l-2.138-2.114l.713-.708l1.425 1.42l3.525-3.525l.713.688zM8.692 21q-.343 0-.575-.232t-.233-.576V5.288q0-.343.233-.575t.575-.232h1.616V3h3.384v1.48h1.62q.344 0 .574.233q.23.232.23.576v6.903q-.275.039-.516.088t-.484.128V5.462H8.885V20h2.561q.104.287.228.527t.293.473z");
}
</style><path class="aq1v00arl"/>`,
		"fallback": "material-symbols-light:battery-status-good-outline",
	});
}

export default Component;
