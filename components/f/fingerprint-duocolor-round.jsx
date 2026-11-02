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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qa1u-fbgm {
  d: path("M4 17v-3a8.062 8.062 0 0 1 12-8m3 3a8.1 8.1 0 0 1 1 3v4m-8-3v5");
}

.z76awob8v {
  stroke-opacity: 0.4;
  d: path("M8 19v-6a4 4 0 1 1 8 0v3");
}
</style><g class="nrj6p8qat"><path class="z76awob8v"/><path class="qa1u-fbgm"/></g>`,
		"fallback": "coolicons:fingerprint-duocolor-round",
	});
}

export default Component;
