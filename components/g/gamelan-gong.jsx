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

.qwhe5z3ha {
  d: path("M3.5 20.5v-17h17v17M12 3.5V7");
}

.rf4oz_bbi {
  d: path("M6.5 12.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.v_s9v1w5p {
  d: path("M10 12.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="qwhe5z3ha"/><path class="rf4oz_bbi"/><path class="v_s9v1w5p"/></g>`,
		"fallback": "uix:gamelan-gong",
	});
}

export default Component;
