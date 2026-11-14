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
		"content": `<style>.feh9o_bde {
  d: path("M3 15q9-10 18 0q-9 10-18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kj7urhmci {
  d: path("M4 7q8-6 16-1M9.75 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="feh9o_bde"/><path class="kj7urhmci"/></g>`,
		"fallback": "uix:eyebrow",
	});
}

export default Component;
