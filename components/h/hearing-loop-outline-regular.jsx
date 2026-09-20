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

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.r1bf3bcyz {
  d: path("M10 18v-3c-2 -1 -3 -3 -3 -5a5 5 0 0 1 10 0c0 1 -1 2 -2 2");
}
</style><g class="nrj6p8qat"><path class="nzpsuduik"/><path class="r1bf3bcyz"/></g>`,
		"fallback": "iconmind:hearing-loop-outline-regular",
	});
}

export default Component;
