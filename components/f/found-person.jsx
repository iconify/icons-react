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
		"content": `<style>.c_t5ec7az {
  d: path("M12 21.5c-4-4.5-7-8-7-12a7 7 0 0 1 14 0c0 4-3 7.5-7 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xyfugct1z {
  d: path("M10 7.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-.5 7c0-1.5 1-2.25 2.5-2.25s2.5.75 2.5 2.25");
}
</style><g class="hntgybcog"><path class="c_t5ec7az"/><path class="xyfugct1z"/></g>`,
		"fallback": "uix:found-person",
	});
}

export default Component;
