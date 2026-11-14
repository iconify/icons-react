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
		"content": `<style>.fiky2_pwy {
  d: path("M6.5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 2.5V6M8 9.5L9.5 6h5L16 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxwth_b7u {
  d: path("M3.5 11.5V19a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-7.5");
}
</style><g class="hntgybcog"><path class="uxwth_b7u"/><path class="fiky2_pwy"/></g>`,
		"fallback": "uix:bin-picking",
	});
}

export default Component;
