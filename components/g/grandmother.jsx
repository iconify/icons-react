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
		"content": `<style>.csndrfvuz {
  d: path("M10.37 5.9a2 2 0 1 1 3.26 0a3.5 3.5 0 1 1-3.26 0M5.25 21.25v-.5a6.75 5.5 0 0 1 13.5 0v.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sgd2xxb1h {
  d: path("m9.5 17.75l2.5 2l2.5-2");
}
</style><g class="hntgybcog"><path class="csndrfvuz"/><path class="sgd2xxb1h"/></g>`,
		"fallback": "iconoven:grandmother",
	});
}

export default Component;
