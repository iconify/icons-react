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
		"content": `<style>.bsq54up_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.555 2.373l7.072 7.072l-3.182 3.182l-7.072-7.072ZM8.75 9.25L3 15m10.75 3c1.75-3.5 4.5-3.5 5.75 0l2.5-2.75v5.5L19.5 18c-1.25 3.5-4 3.5-5.75 0Z");
}
</style><path class="bsq54up_p"/>`,
		"fallback": "uix-sharp:fish-auction",
	});
}

export default Component;
