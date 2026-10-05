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
		"content": `<style>.hahcwdkdq {
  stroke-opacity: 0.4;
  d: path("M18 21L18 3M15 6L18 3L21 6");
}

.l8pqsacur {
  d: path("M6 3L6 21M3 18L6 21L9 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hahcwdkdq"/><path class="l8pqsacur"/></g>`,
		"fallback": "keyline-icons:arrow-down-up-two-tone",
	});
}

export default Component;
