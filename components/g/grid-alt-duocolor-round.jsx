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

.rxftmk89r {
  d: path("M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z");
}

.sazxk1b4f {
  stroke-opacity: 0.4;
  d: path("M4 9h16M4 15h16M9 4v16m6-16v16");
}
</style><g class="nrj6p8qat"><path class="sazxk1b4f"/><path class="rxftmk89r"/></g>`,
		"fallback": "coolicons:grid-alt-duocolor-round",
	});
}

export default Component;
