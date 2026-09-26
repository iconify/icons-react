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
		"content": `<style>.c0f8r7r7i {
  stroke-opacity: 0.4;
  d: path("M13 6L17 6M13 10L19 10M13 14L21 14M13 18L23 18");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pxqe3nblm {
  d: path("M6 5L6 18M1.7071 13.7071L6 18L10.2929 13.7071");
}
</style><g class="gp_8x1bzb"><path class="c0f8r7r7i"/><path class="pxqe3nblm"/></g>`,
		"fallback": "keyline-icons:arrow-down-narrow-wide-sharp-two-tone",
	});
}

export default Component;
