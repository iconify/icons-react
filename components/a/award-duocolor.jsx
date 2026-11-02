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

.wxe2_ouwj {
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9");
}

.y6m2k97ce {
  stroke-opacity: 0.4;
  d: path("m14 15l2 6l-4-2l-4 2l2-6");
}
</style><g class="nrj6p8qat"><path class="y6m2k97ce"/><path class="wxe2_ouwj"/></g>`,
		"fallback": "coolicons:award-duocolor",
	});
}

export default Component;
