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
		"content": `<style>.qkqarz31v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m13-4c-3.296-2.472-8-.12-8 4s4.704 6.472 8 4m-9-6h6m-6 4h6");
}
</style><path class="qkqarz31v"/>`,
		"fallback": "coolicons:circle-currency-euro-round",
	});
}

export default Component;
