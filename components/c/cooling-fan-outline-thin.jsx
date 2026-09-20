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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fcybkialk {
  d: path("m5 12 3 -3 3 3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.sxpywdblf {
  d: path("m12 5 3 3 -3 3Z");
}

.tjh8csbtc {
  d: path("m19 12 -3 3 -3 -3Z");
}

.u3f8wv0-j {
  d: path("m12 19 -3 -3 3 -3Z");
}
</style><g class="hntgybcog"><path class="o_ssmh9ez"/><path class="bo51iypxr"/><path class="sxpywdblf"/><path class="tjh8csbtc"/><path class="u3f8wv0-j"/><path class="fcybkialk"/></g>`,
		"fallback": "iconmind:cooling-fan-outline-thin",
	});
}

export default Component;
