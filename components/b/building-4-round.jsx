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
		"content": `<style>.uy6tfkbil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M5 20V8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v12m0-11a4 4 0 0 1 4 4v7M9 8h2m-2 4h2");
}
</style><path class="uy6tfkbil"/>`,
		"fallback": "coolicons:building-4-round",
	});
}

export default Component;
