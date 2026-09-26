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

.zamthyb_j {
  stroke-opacity: 0.4;
  d: path("M3 12L23 12M1 20L15 20");
}
</style><g class="gp_8x1bzb"><path class="zamthyb_j"/><path class="j21bw5e7j"/></g>`,
		"fallback": "keyline-icons:align-offset-bottom-sharp-two-tone",
	});
}

export default Component;
