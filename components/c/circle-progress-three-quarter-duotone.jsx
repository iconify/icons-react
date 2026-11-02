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
		"content": `<style>.a56vwjqxu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9 0V7a5 5 0 1 1-5 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.ivmlfdc4c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 11V7a1 1 0 0 1 1-1a5.9 5.9 0 0 1 2.336.472c.713.3 1.361.737 1.907 1.285A5.98 5.98 0 0 1 18 12a5.97 5.97 0 0 1-1.757 4.243A5.98 5.98 0 0 1 12 18a5.97 5.97 0 0 1-4.243-1.757a6 6 0 0 1-1.285-1.907A5.9 5.9 0 0 1 6 12a1 1 0 0 1 1-1Z");
}
</style><g class="ft5dv1b6b"><path class="ivmlfdc4c"/><path class="a56vwjqxu"/></g>`,
		"fallback": "coolicons:circle-progress-three-quarter-duotone",
	});
}

export default Component;
