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
		"content": `<style>.hrbusxcll {
  d: path("M8 10h8m-8 0c.67 1 1 2.5 1 4c0 3-2 5.5-4 7m11-11c-.67 1-1 2.5-1 4c0 3 2 5.5 4 7M3 21h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u9ch4kjsw {
  stroke-opacity: 0.4;
  d: path("M7 6a2 2 0 1 1 4 0a3 3 0 0 1 6 0");
}
</style><g class="nrj6p8qat"><path class="u9ch4kjsw"/><path class="hrbusxcll"/></g>`,
		"fallback": "coolicons:cooling-tower-duocolor-round",
	});
}

export default Component;
