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

.pz15-0ipt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 12V7a5 5 0 1 1-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="pz15-0ipt"/><path class="a56vwjqxu"/></g>`,
		"fallback": "coolicons:circle-progress-three-quarter-duotone",
	});
}

export default Component;
