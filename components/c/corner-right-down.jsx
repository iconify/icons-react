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
		"content": `<style>.bq82uemcg {
  d: path("M4.25 4.25h8a2.5 2.5 0 0 1 2.5 2.5v12.5");
}

.grlcs-vwr {
  d: path("m11 15.5l3.75 3.75l3.75-3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bq82uemcg"/><path class="grlcs-vwr"/></g>`,
		"fallback": "iconoven:corner-right-down",
	});
}

export default Component;
