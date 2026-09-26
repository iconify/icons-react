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
		"content": `<style>.ouje6tb5r {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 4L9 4M1 12L23 12M1 20L16 20");
}
</style><path class="ouje6tb5r"/>`,
		"fallback": "keyline-icons:bar-chart-horizontal-start-sharp-fill",
	});
}

export default Component;
