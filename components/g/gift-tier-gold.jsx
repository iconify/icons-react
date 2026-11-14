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
		"content": `<style>.muslyhu-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.25h15v4.5H3Zm3 4.5h15v4.5H6Zm-2 4.5h15v4.5H4Z");
}
</style><path class="muslyhu-l"/>`,
		"fallback": "uix-sharp:gift-tier-gold",
	});
}

export default Component;
