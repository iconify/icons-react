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
		"content": `<style>.qfqcd2z2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9.75 9.75 0 0 1 18 0a9.75 9.75 0 0 1-18 0m7 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="qfqcd2z2f"/>`,
		"fallback": "coolicons:eye-sharp",
	});
}

export default Component;
