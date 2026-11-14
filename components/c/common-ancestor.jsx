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

.hrwdc6bcf {
  d: path("M4 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.wnb3aabco {
  d: path("M12 21v-8m0 0c0-3-6-2.5-6-6m6 6c0-3 6-2.5 6-6");
}
</style><g class="hntgybcog"><path class="wnb3aabco"/><path class="hrwdc6bcf"/></g>`,
		"fallback": "uix:common-ancestor",
	});
}

export default Component;
