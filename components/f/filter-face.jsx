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
		"content": `<style>.ieho11bzo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 16.25a3.25 3.25 0 0 0 5 0M3.92 3.38l4.16 1.74q.92.38.21 1.09L5.21 9.29q-.71.71-.92-.27L3.21 3.98Q3 3 3.92 3.38m16.16 0l-4.16 1.74q-.92.38-.21 1.09l3.08 3.08q.71.71.92-.27l1.08-5.04q.21-.98-.71-.6");
}

.ttxdcjbnj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.25 12.75h.01m5.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zzwtwabgm {
  cx: 12px;
  cy: 13.5px;
  r: 7.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="y9tr6bcfx"><circle class="zzwtwabgm"/><path class="ttxdcjbnj"/><path class="ieho11bzo"/></g>`,
		"fallback": "iconoven:filter-face",
	});
}

export default Component;
