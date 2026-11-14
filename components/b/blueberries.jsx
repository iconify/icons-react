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
		"content": `<style>.ewi6o30tm {
  d: path("M8 17a4 4 0 1 0 8 0a4 4 0 1 0-8 0m0-7h.01M16 10h.01M12 17h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n8ub3d4dk {
  d: path("M4 10a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="n8ub3d4dk"/><path class="ewi6o30tm"/></g>`,
		"fallback": "uix:blueberries",
	});
}

export default Component;
