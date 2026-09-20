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
		"content": `<style>.lwe5xkb4b {
  fill: currentColor;
  d: path("m14.5 14.23l2.962-2.96h-5.923zM8 18q-2.507 0-4.253-1.745Q2 14.509 2 12.004t1.747-4.255T8 6h8q2.507 0 4.254 1.745T22 11.996t-1.747 4.255T16 18z");
}
</style><path class="lwe5xkb4b"/>`,
		"fallback": "material-symbols-light:dropdown-menu",
	});
}

export default Component;
