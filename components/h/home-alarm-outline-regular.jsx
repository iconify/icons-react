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
		"content": `<style>.if5ft31dv {
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ssjs9weax {
  d: path("M19 8c2 2 2 6 0 8");
}

.xfo-vjbcz {
  d: path("M6 17c2 -2 2 -5 2 -7 0 -3 2 -5 4 -5s4 2 4 5c0 2 0 5 2 7Z");
}
</style><g class="nrj6p8qat"><path class="xfo-vjbcz"/><path class="if5ft31dv"/><path class="ssjs9weax"/></g>`,
		"fallback": "iconmind:home-alarm-outline-regular",
	});
}

export default Component;
