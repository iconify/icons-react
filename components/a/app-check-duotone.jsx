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

.r63fawbfm {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 2H18C20.2091 2 22 3.79086 22 6V11C22 11.5523 21.5523 12 21 12H15C13.3431 12 12 13.3431 12 15V21C12 21.5523 11.5523 22 11 22H6C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2Z");
  stroke: none;
}

.w8wjawbcc {
  d: path("M15 18L17 20L21 16");
}
</style><g class="nrj6p8qat"><path class="r63fawbfm"/><path class="w8wjawbcc"/></g>`,
		"fallback": "keyline-icons:app-check-duotone",
	});
}

export default Component;
