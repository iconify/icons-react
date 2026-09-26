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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.j21bw5e7j {
  d: path("M15 4L23 4");
}

.pi4v--bca {
  stroke-opacity: 0.4;
  d: path("M1 12L23 12M8 20L23 20");
}
</style><g class="gp_8x1bzb"><path class="pi4v--bca"/><path class="j21bw5e7j"/></g>`,
		"fallback": "keyline-icons:bar-chart-horizontal-end-sharp-two-tone",
	});
}

export default Component;
