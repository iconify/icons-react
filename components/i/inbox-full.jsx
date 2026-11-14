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
		"content": `<style>.dpo7-x1-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13V4.5A1.5 1.5 0 0 1 8 3h8a1.5 1.5 0 0 1 1.5 1.5V13m-15 0v5.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V13h-5L15 15.5H9L7.5 13Zm7-6h5m-5 3h5");
}
</style><path class="dpo7-x1-d"/>`,
		"fallback": "uix-sharp:inbox-full",
	});
}

export default Component;
