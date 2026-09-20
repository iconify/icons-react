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
		"content": `<style>.bxil99bgw {
  d: path("M16 3.5V7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lzg7801hk {
  d: path("M6 9a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}
</style><g class="hntgybcog"><path class="n0n63pb2v"/><path class="lzg7801hk"/><path class="bxil99bgw"/></g>`,
		"fallback": "iconmind:factory-data-outline-thin",
	});
}

export default Component;
