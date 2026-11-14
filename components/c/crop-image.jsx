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
		"content": `<style>.eorzvx_sw {
  d: path("M6.5 2.5v15h15");
}

.hic28wblm {
  d: path("M2.5 6.5h15v15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wvmk1jbtq {
  d: path("M9.5 14.5L12 12l2.5 2.5m-.5-5h.01");
}
</style><g class="hntgybcog"><path class="eorzvx_sw"/><path class="hic28wblm"/><path class="wvmk1jbtq"/></g>`,
		"fallback": "uix:crop-image",
	});
}

export default Component;
