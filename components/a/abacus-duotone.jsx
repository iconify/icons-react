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

.ob3l3g4sd {
  stroke-opacity: 0.4;
  d: path("M5 3V21M19 3V21M3 21H21M5 8H19M5 15H19");
}

.s-mwn8bus {
  d: path("M9 6.5V9.5M13 6.5V9.5M11 13.5V16.5M15 13.5V16.5");
}
</style><g class="nrj6p8qat"><path class="ob3l3g4sd"/><path class="s-mwn8bus"/></g>`,
		"fallback": "keyline-icons:abacus-duotone",
	});
}

export default Component;
