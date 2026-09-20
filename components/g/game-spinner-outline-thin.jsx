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
		"content": `<style>.hln-s6a_j {
  d: path("M12 12H6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i1hf0mb5m {
  d: path("M15 6h3v3Z");
}

.mnv4pvbmf {
  d: path("m12 12 6 -6");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}
</style><g class="hntgybcog"><path class="o_ssmh9ez"/><path class="mnv4pvbmf"/><path class="i1hf0mb5m"/><path class="hln-s6a_j"/></g>`,
		"fallback": "iconmind:game-spinner-outline-thin",
	});
}

export default Component;
