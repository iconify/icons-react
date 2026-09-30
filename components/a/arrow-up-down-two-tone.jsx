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
		"content": `<style>.ad_9ubb4f {
  d: path("M6 21L6 3M9 6L6 3L3 6");
}

.ehcor-buk {
  stroke-opacity: 0.4;
  d: path("M18 3L18 21M21 18L18 21L15 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ehcor-buk"/><path class="ad_9ubb4f"/></g>`,
		"fallback": "keyline-icons:arrow-up-down-two-tone",
	});
}

export default Component;
