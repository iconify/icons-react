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

.k9ax4ib7e {
  d: path("M9.5 17c0-4 2-5.5 5-5.5c0 3.5-1.5 5.5-5 5.5m0 0l2.75-2.75");
}

.p_oqctgty {
  d: path("M12 2.5s-6.5 7-6.5 12a6.5 6.5 0 0 0 13 0c0-5-6.5-12-6.5-12");
}
</style><g class="hntgybcog"><path class="p_oqctgty"/><path class="k9ax4ib7e"/></g>`,
		"fallback": "uix:drop-leaf-badge",
	});
}

export default Component;
