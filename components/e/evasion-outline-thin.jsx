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

.nfdm2s1cw {
  d: path("m5 3 16 16");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}

.zrubkobvc {
  d: path("M21 15v4h-4");
}
</style><g class="hntgybcog"><path class="ymp2b4b6u"/><path class="nfdm2s1cw"/><path class="zrubkobvc"/></g>`,
		"fallback": "iconmind:evasion-outline-thin",
	});
}

export default Component;
