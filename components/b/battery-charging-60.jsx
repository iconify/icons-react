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
		"content": `<style>.llracrbri {
  fill: currentColor;
  d: path("M8.692 21q-.343 0-.575-.232t-.233-.576V5.288q0-.343.233-.575t.575-.232h1.616V3h3.384v1.48h1.62q.344 0 .574.233q.23.232.23.576v6.903q-2.135.275-3.587 1.897t-1.452 3.853q0 .843.227 1.618t.663 1.44zm.192-8.808h6.232v-6.73H8.885zm7.693 9.289v-2.635h-1.539l2.385-4.327v2.635h1.539z");
}
</style><path class="llracrbri"/>`,
		"fallback": "material-symbols-light:battery-charging-60",
	});
}

export default Component;
