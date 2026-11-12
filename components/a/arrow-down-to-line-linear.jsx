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
		"content": `<style>.a8axvdbak {
  d: path("M20 21L4 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u09qwnbtf {
  d: path("M12 3L12 16M16 11.625L12 16L8 11.625");
}
</style><g class="hntgybcog"><path class="a8axvdbak"/><path class="u09qwnbtf"/></g>`,
		"fallback": "solar:arrow-down-to-line-linear",
	});
}

export default Component;
