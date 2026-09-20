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

.qw7b_6b1t {
  d: path("M8 20h8");
}

.vrfr-0-4l {
  d: path("M3 4h18l-7 7v5h-4v-5Z");
}
</style><g class="nrj6p8qat"><path class="vrfr-0-4l"/><path class="qw7b_6b1t"/></g>`,
		"fallback": "iconmind:filter-result-outline-regular",
	});
}

export default Component;
