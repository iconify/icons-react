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

.lcshvq_ch {
  d: path("M8 8v6l3 -3Z");
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.p_qlawbmx {
  d: path("m12.5 15.5 2 2L18 14");
}
</style><g class="hntgybcog"><path class="nzpsuduik"/><path class="lcshvq_ch"/><path class="p_qlawbmx"/></g>`,
		"fallback": "iconmind:eval-harness-outline-thin",
	});
}

export default Component;
