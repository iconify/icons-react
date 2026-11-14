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
		"content": `<style>.wsqqywzve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.1 21.5H4.5v-19h15v10.1M8.5 2.5v19m3-14.5h4m-4 3H14m1.25 10.75l5.5-5.5m-5.25.25h.01m4.99 5h.01");
}
</style><path class="wsqqywzve"/>`,
		"fallback": "uix-sharp:deposit-interest-paid",
	});
}

export default Component;
