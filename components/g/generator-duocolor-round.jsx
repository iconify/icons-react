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

.p3vd6oblb {
  d: path("M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3 10v2m12-2v2m-4-10h3m-3 4h3");
}

.s1ql6mbjf {
  stroke-opacity: 0.4;
  d: path("M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4M9 10l-3 3h4l-3 3");
}
</style><g class="nrj6p8qat"><path class="s1ql6mbjf"/><path class="p3vd6oblb"/></g>`,
		"fallback": "coolicons:generator-duocolor-round",
	});
}

export default Component;
