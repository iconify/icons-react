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
		"content": `<style>.hy-9opbbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.37 13.48a8.5 8.5 0 0 1-6.89 6.89m-2.96 0a8.5 8.5 0 0 1-6.89-6.89m0-2.96a8.5 8.5 0 0 1 6.89-6.89m2.96 0a8.5 8.5 0 0 1 6.89 6.89m-6.62-.77l-.6-.9H10.1v1.5c0 2 3.75 1.25 3.75 3.25v1.55h-3.185l-.615-1M12 7.5v1.35m0 6.3v1.35");
}
</style><path class="hy-9opbbp"/>`,
		"fallback": "iconoven:installments-sharp",
	});
}

export default Component;
