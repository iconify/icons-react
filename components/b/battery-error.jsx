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
		"content": `<style>.evihqjbpt {
  fill: currentColor;
  d: path("m16.112 21l-.689-.688l2.1-2.1l-2.1-2.1l.689-.689l2.1 2.1l2.1-2.1l.688.689l-2.075 2.1l2.075 2.1l-.688.688l-2.1-2.075zm-7.42 0q-.343 0-.575-.232t-.232-.576V5.288q0-.343.232-.575t.575-.232h1.616V3h3.384v1.48h1.62q.344 0 .574.233q.23.232.23.576v7.45q-1.706.659-2.735 2.146t-1.029 3.332q0 .739.17 1.44q.168.703.526 1.343z");
}
</style><path class="evihqjbpt"/>`,
		"fallback": "material-symbols-light:battery-error",
	});
}

export default Component;
