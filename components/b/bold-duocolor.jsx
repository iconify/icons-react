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
		"content": `<style>.co2rlf7fm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 11h8a4 4 0 1 1 0 8H6V5h6a3 3 0 0 1 0 6");
}
</style><path class="co2rlf7fm"/>`,
		"fallback": "coolicons:bold-duocolor",
	});
}

export default Component;
