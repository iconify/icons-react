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
		"content": `<style>.ls-7v03zr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7L3 3L7 3M9.5 3L14.5 3M21 8L21 3.0001L17 3M8 21L3 21L3 17M3 9.5L3 14.5M15.5 20.6757L15.5 9M9.7028 14.6757L15.5 21L21.2628 14.7132");
}
</style><path class="ls-7v03zr"/>`,
		"fallback": "keyline-icons:arrow-down-dashed-panel-sharp-fill",
	});
}

export default Component;
