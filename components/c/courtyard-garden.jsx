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
		"content": `<style>.dsd8enb4b {
  d: path("M12 13c-3 0-5-2-5-5c3 0 5 2 5 5m0-2c0-3 2-5 5-5c0 3-2 5-5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.syuefq-jr {
  d: path("M9.5 21.5h-5a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-5M12 18v-8");
}
</style><g class="hntgybcog"><path class="syuefq-jr"/><path class="dsd8enb4b"/></g>`,
		"fallback": "uix:courtyard-garden",
	});
}

export default Component;
