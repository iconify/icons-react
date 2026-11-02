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
		"content": `<style>.jeg0h9bgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 7a7.071 7.071 0 1 0 0 10M5 10h2m0 0h6m-8 4h2m0 0h6");
}
</style><path class="jeg0h9bgv"/>`,
		"fallback": "coolicons:currency-euro-duotone-sharp",
	});
}

export default Component;
