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

.s7unokb9e {
  stroke-opacity: 0.4;
  d: path("M8 3v2m8-2v2");
}

.vtb0ipblj {
  d: path("M4 9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm0 0h16");
}
</style><g class="nrj6p8qat"><path class="s7unokb9e"/><path class="vtb0ipblj"/></g>`,
		"fallback": "coolicons:calendar-duocolor-round",
	});
}

export default Component;
