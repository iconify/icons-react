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
		"content": `<style>.aqk9lqbnm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.7311 11.7118L9.6667 17L19.2689 6.7118");
}
</style><path class="aqk9lqbnm"/>`,
		"fallback": "keyline-icons:check-sharp-duotone",
	});
}

export default Component;
