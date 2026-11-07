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
		"content": `<style>.nlk1d4b-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 7H3v14h18V7h-2M9 12l3 3l3-3m-3 3V3");
}
</style><path class="nlk1d4b-p"/>`,
		"fallback": "coolicons:import-duotone-sharp",
	});
}

export default Component;
