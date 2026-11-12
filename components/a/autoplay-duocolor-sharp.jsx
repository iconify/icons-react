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
		"content": `<style>.e9i-mpbsf {
  d: path("M20 16a8.944 8.944 0 1 1 0-8m-4 0h4V4");
}

.jl1u9iyxw {
  stroke-opacity: 0.4;
  d: path("m10 8l6 4l-6 4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jl1u9iyxw"/><path class="e9i-mpbsf"/></g>`,
		"fallback": "coolicons:autoplay-duocolor-sharp",
	});
}

export default Component;
