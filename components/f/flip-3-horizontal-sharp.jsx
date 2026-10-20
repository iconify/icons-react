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
		"content": `<style>.wn7tq1zrj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 5L22 5M5.2929 1.7071L2 5L5.2929 8.2929M18.7071 1.7071L22 5L18.7071 8.2929M10 11L10 22L2 22ZM14 11L14 22L22 22Z");
}
</style><path class="wn7tq1zrj"/>`,
		"fallback": "keyline-icons:flip-3-horizontal-sharp",
	});
}

export default Component;
