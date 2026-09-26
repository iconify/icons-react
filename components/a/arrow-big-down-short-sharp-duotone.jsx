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
		"content": `<style>.rmok5rrec {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21L2 11L7 11L7 3L17 3L17 11L22 11Z");
}
</style><path class="rmok5rrec"/>`,
		"fallback": "keyline-icons:arrow-big-down-short-sharp-duotone",
	});
}

export default Component;
