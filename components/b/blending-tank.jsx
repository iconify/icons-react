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
		"content": `<style>.b2t92fb4g {
  d: path("M4.5 10.5q3.75-2 7.5 0t7.5 0M12 2.25V14.5m-3 0h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.re19-d-ej {
  d: path("M4.5 18.5v-9a7.5 5 0 0 1 15 0v9Zm2 0v3m11-3v3");
}
</style><g class="hntgybcog"><path class="re19-d-ej"/><path class="b2t92fb4g"/></g>`,
		"fallback": "uix:blending-tank",
	});
}

export default Component;
