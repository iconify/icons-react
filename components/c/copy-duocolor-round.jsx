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

.s1fc08b0i {
  stroke-opacity: 0.4;
  d: path("M7 3h10a4 4 0 0 1 4 4v10");
}

.szjxg1zjg {
  d: path("M3 11a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z");
}
</style><g class="nrj6p8qat"><path class="s1fc08b0i"/><path class="szjxg1zjg"/></g>`,
		"fallback": "coolicons:copy-duocolor-round",
	});
}

export default Component;
