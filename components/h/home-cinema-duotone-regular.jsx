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
		"content": `<style>.b46x6x-hs {
  fill: currentColor;
  d: path("M3 4v10h18V4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cl583ybqk {
  d: path("M13 20a3 3 0 0 1 6 0");
}

.e03sywmba {
  d: path("M3 4v10h18V4Z");
}

.jaoga6bck {
  d: path("M5 20a3 3 0 0 1 6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b46x6x-hs"/><path class="e03sywmba"/><path class="jaoga6bck"/><path class="cl583ybqk"/></g>`,
		"fallback": "iconmind:home-cinema-duotone-regular",
	});
}

export default Component;
