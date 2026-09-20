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
		"content": `<style>.abhqbyb0v {
  d: path("M14.54 6.56a6 6 0 1 1 -5.08 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mu0i9zbhe {
  d: path("M14 2h5a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V5a3 3 0 0 1 3 -3h5");
}
</style><g class="hntgybcog"><path class="mu0i9zbhe"/><path class="abhqbyb0v"/></g>`,
		"fallback": "iconmind:agent-sandbox-outline-thin",
	});
}

export default Component;
