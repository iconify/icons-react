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
		"content": `<style>.i79bw0b_m {
  d: path("M10 9C9 6 7 5 5 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yya5lpbze {
  d: path("M3 18c0 -6 3 -9 7 -9 5 0 9 3.5 10 7 0.5 1.5 0 2 -2 2Z");
}
</style><g class="nrj6p8qat"><path class="yya5lpbze"/><path class="i79bw0b_m"/></g>`,
		"fallback": "iconmind:ballet-outline-regular",
	});
}

export default Component;
