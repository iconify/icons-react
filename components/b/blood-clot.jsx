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

.u45xnhbml {
  d: path("M2.5 5.5h19m-19 13h19");
}

.vt9trbczc {
  fill: currentColor;
  d: path("M9 8c1.5-1 3 .25 4-.25c1.5-.75 3 .5 2.75 2.25c1.25 1 1 3.25-.25 4c.5 1.75-1.25 2.75-2.5 2.25c-1.25.75-3 .25-3.5-1c-1.5-.5-2-2.5-1-3.5C7.5 10.5 7.75 8.5 9 8");
}
</style><g class="hntgybcog"><path class="u45xnhbml"/><path class="vt9trbczc"/></g>`,
		"fallback": "uix:blood-clot",
	});
}

export default Component;
