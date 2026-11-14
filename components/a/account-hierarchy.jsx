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
		"content": `<style>.bj_2tbbee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2.5h5.5v7h-5.5ZM3.5 15H9v6.5H3.5ZM15 15h5.5v6.5H15Zm-3-5.5v2.75M6.25 15v-1.25a1.5 1.5 0 0 1 1.5-1.5h8.5a1.5 1.5 0 0 1 1.5 1.5V15");
}
</style><path class="bj_2tbbee"/>`,
		"fallback": "uix-sharp:account-hierarchy",
	});
}

export default Component;
