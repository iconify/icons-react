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
		"content": `<style>.tbn3k0brm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 4L23 4M1 12L16 12M1 20L9 20");
}
</style><path class="tbn3k0brm"/>`,
		"fallback": "keyline-icons:bar-chart-2-horizontal-start-sharp",
	});
}

export default Component;
