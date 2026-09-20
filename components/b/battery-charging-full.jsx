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
		"content": `<style>.g6f1czbvk {
  fill: currentColor;
  d: path("M16.577 21.48v-2.634h-1.538l2.384-4.327v2.635h1.539zM8.692 21q-.343 0-.575-.232t-.233-.576V5.288q0-.343.233-.575t.575-.232h1.616V3h3.384v1.48h1.62q.344 0 .574.233q.23.232.23.576v6.903q-2.135.275-3.587 1.897t-1.452 3.853q0 .843.227 1.618t.663 1.44z");
}
</style><path class="g6f1czbvk"/>`,
		"fallback": "material-symbols-light:battery-charging-full",
	});
}

export default Component;
