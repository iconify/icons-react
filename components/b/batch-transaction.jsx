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
		"content": `<style>.e6olv-hqu {
  d: path("M6 10h6a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 12 20H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pi_3pdbah {
  d: path("M8.5 4h11a2 2 0 0 1 2 2v8M9 10v10");
}

.qfi76c80d {
  d: path("M5.5 7h11a2 2 0 0 1 2 2v8");
}
</style><g class="hntgybcog"><path class="e6olv-hqu"/><path class="qfi76c80d"/><path class="pi_3pdbah"/></g>`,
		"fallback": "uix:batch-transaction",
	});
}

export default Component;
