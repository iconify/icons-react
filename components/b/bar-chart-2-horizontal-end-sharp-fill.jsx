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
		"content": `<style>.ckuawubog {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 4L23 4M8 12L23 12M15 20L23 20");
}
</style><path class="ckuawubog"/>`,
		"fallback": "keyline-icons:bar-chart-2-horizontal-end-sharp-fill",
	});
}

export default Component;
