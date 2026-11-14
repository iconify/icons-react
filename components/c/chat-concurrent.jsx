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

.ivx1gg7qq {
  d: path("M3.5 13a2 2 0 0 1 2-2H13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8.5l-3 2v-2a2 2 0 0 1-2-2Z");
}

.r21x0u0gh {
  d: path("M6.5 11V9.5a2 2 0 0 1 2-2H16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1");
}

.vmub-qomm {
  d: path("M9.5 7.5V6a2 2 0 0 1 2-2H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1");
}
</style><g class="hntgybcog"><path class="ivx1gg7qq"/><path class="r21x0u0gh"/><path class="vmub-qomm"/></g>`,
		"fallback": "uix:chat-concurrent",
	});
}

export default Component;
