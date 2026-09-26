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

.qszkm1b0z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 1H17C19.2091 1 21 2.7909 21 5V9C21 10.6569 19.6569 12 18 12H12V18C12 19.6569 10.6569 21 9 21H5C2.7909 21 1 19.2091 1 17V5C1 2.7909 2.7909 1 5 1ZM5 3C3.8954 3 3 3.8954 3 5V10H10V3Z");
  stroke: none;
}

.yrxuhgb1c {
  d: path("M19 16L19 22M16 19L22 19");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="qszkm1b0z"/><path class="yrxuhgb1c"/></g>`,
		"fallback": "keyline-icons:grid-2x2-plus-fill",
	});
}

export default Component;
