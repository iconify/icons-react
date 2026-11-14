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
		"content": `<style>.ampa0ac6f {
  d: path("M7.25 7.5a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0m0 0h9.5");
}

.bvlj-2qyo {
  d: path("M10 7.5a2 4.75 0 1 0 4 0a2 4.75 0 1 0-4 0M2.5 16H6l3-1h4a1.5 1.5 0 0 1 0 3h-3");
}

.dgxwlvpee {
  d: path("m13.5 18l5-2.5A1.5 1.5 0 0 1 20 18l-6.5 3.5h-11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ampa0ac6f"/><path class="bvlj-2qyo"/><path class="dgxwlvpee"/></g>`,
		"fallback": "uix:foreign-aid",
	});
}

export default Component;
