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
		"content": `<style>.duxy6wbvl {
  d: path("m7 9 4 4 6 -6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ok9ioqb8x {
  d: path("M4 17h16");
}
</style><g class="nrj6p8qat"><path class="duxy6wbvl"/><path class="ok9ioqb8x"/></g>`,
		"fallback": "iconmind:groundedness-outline-regular",
	});
}

export default Component;
