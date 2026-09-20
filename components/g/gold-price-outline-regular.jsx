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

.rwt37ub5x {
  d: path("m5 9.5 4 -4 3 3L18.5 2");
}

.u1klnyb3u {
  d: path("m2 18.5 5 -5h10l5 5Z");
}
</style><g class="nrj6p8qat"><path class="u1klnyb3u"/><path class="rwt37ub5x"/></g>`,
		"fallback": "iconmind:gold-price-outline-regular",
	});
}

export default Component;
