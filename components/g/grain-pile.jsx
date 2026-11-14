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
		"content": `<style>.bnqy4obot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18.5C7 14 9.5 6 12 6s5 8 9 12.5m-18.5 0h19M12 11h.01M10 14.5h.01m3.99 0h.01");
}
</style><path class="bnqy4obot"/>`,
		"fallback": "uix-sharp:grain-pile",
	});
}

export default Component;
