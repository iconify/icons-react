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

.k74vnib1e {
  d: path("M3 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.mw9rhebcm {
  d: path("M2 16a4.5 4.5 0 0 1 9 0");
}

.tlxtedbcg {
  d: path("m17 8 5 5a5 5 0 1 1 -10 0Z");
}
</style><g class="hntgybcog"><path class="k74vnib1e"/><path class="mw9rhebcm"/><path class="tlxtedbcg"/></g>`,
		"fallback": "iconmind:body-fat-outline-thin",
	});
}

export default Component;
