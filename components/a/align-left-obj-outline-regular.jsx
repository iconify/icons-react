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
		"content": `<style>.cfq8fpb9k {
  d: path("M5.5 17H12");
}

.j41x8568l {
  d: path("M5.5 7H15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uw5kuce7r {
  d: path("M3 3v18");
}

.zdse1fb0u {
  d: path("M5.5 12H19");
}
</style><g class="nrj6p8qat"><path class="uw5kuce7r"/><path class="j41x8568l"/><path class="zdse1fb0u"/><path class="cfq8fpb9k"/></g>`,
		"fallback": "iconmind:align-left-obj-outline-regular",
	});
}

export default Component;
