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
		"content": `<style>.i67dqei2u {
  d: path("M4 10v10h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.piaam4vpr {
  d: path("M20 4 4 20");
}
</style><g class="nrj6p8qat"><path class="piaam4vpr"/><path class="i67dqei2u"/></g>`,
		"fallback": "iconmind:arrow-down-left-outline-regular",
	});
}

export default Component;
