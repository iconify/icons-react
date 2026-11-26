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
		"content": `<style>.c4l-upbln {
  stroke-opacity: 0.4;
  d: path("M2 5L2 19M22 5L22 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r3nxm48jh {
  d: path("M6 12L18 12M9 9L6 12L9 15M15 9L18 12L15 15");
}
</style><g class="nrj6p8qat"><path class="c4l-upbln"/><path class="r3nxm48jh"/></g>`,
		"fallback": "keyline-icons:expand-horizontal-two-tone",
	});
}

export default Component;
