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
		"content": `<style>.aolioqcnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L3 19C3 20.1046 3.8954 21 5 21L21 21M7 17L7 11M11 11L11 5M15 5L15 9M19 17L19 9");
}
</style><path class="aolioqcnm"/>`,
		"fallback": "keyline-icons:chart-waterfall",
	});
}

export default Component;
