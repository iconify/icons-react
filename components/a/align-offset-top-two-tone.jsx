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
		"content": `<style>.bvpe1-nac {
  d: path("M16 20L22 20");
}

.ly67rybbe {
  stroke-opacity: 0.4;
  d: path("M2 4L14 4M4 12L22 12");
}

.to0c2ub7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="to0c2ub7t"><path class="ly67rybbe"/><path class="bvpe1-nac"/></g>`,
		"fallback": "keyline-icons:align-offset-top-two-tone",
	});
}

export default Component;
