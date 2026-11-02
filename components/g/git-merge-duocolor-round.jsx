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

.s2j4utbuk {
  stroke-opacity: 0.4;
  d: path("M5 8a4 4 0 0 0 4 4h8");
}

.ul1-pccnm {
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5 8v8");
}
</style><g class="nrj6p8qat"><path class="s2j4utbuk"/><path class="ul1-pccnm"/></g>`,
		"fallback": "coolicons:git-merge-duocolor-round",
	});
}

export default Component;
