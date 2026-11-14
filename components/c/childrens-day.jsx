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
		"content": `<style>.ibtqq7bfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.25 3.237l2.08 6.397l-8.08 3.995l-.58-8.995Zm-6 10.513C11.5 17 8.5 15.5 7.5 18c-.5 1.75-2 3-4 3.5M18.25 3.237l-6 10.392M9.5 14.75l1 2.75M5.25 19l1.5 2.5");
}
</style><path class="ibtqq7bfa"/>`,
		"fallback": "uix-sharp:childrens-day",
	});
}

export default Component;
