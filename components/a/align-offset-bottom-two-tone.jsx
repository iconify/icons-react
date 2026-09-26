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
		"content": `<style>.e8lb8uc3g {
  stroke-opacity: 0.4;
  d: path("M4 12L22 12M2 20L14 20");
}

.l12_cmb5r {
  d: path("M16 4L22 4");
}

.to0c2ub7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="to0c2ub7t"><path class="e8lb8uc3g"/><path class="l12_cmb5r"/></g>`,
		"fallback": "keyline-icons:align-offset-bottom-two-tone",
	});
}

export default Component;
