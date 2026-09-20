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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o9x6y_bij {
  d: path("m9 10 -4 4 4 4");
}

.wptmod37f {
  d: path("M21 4v10H5");
}
</style><g class="hntgybcog"><path class="wptmod37f"/><path class="o9x6y_bij"/></g>`,
		"fallback": "iconmind:command-outline-thin",
	});
}

export default Component;
