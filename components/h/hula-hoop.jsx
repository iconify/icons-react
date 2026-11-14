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
		"content": `<style>.e179vlb3j {
  d: path("M10 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 3.5v7M9 21l3-6.5l3 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ltkj5n90t {
  d: path("m8 6l4 3l4-3M3.5 13a8.5 2.5 0 1 0 17 0a8.5 2.5 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="e179vlb3j"/><path class="ltkj5n90t"/></g>`,
		"fallback": "uix:hula-hoop",
	});
}

export default Component;
