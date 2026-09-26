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

.qrigulbqv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 22L5 4C5 2.8954 5.8954 2 7 2L17 2C18.1046 2 19 2.8954 19 4L19 22L5 22Z");
  stroke: none;
}

.vnlwh5bzj {
  d: path("M6 21L6 4C6 3.4477 6.4477 3 7 3L17 3C17.5523 3 18 3.4477 18 4L18 21L6 21ZM2 21L22 21M14 11L14 13");
}
</style><g class="nrj6p8qat"><path class="qrigulbqv"/><path class="vnlwh5bzj"/></g>`,
		"fallback": "keyline-icons:door-two-tone",
	});
}

export default Component;
