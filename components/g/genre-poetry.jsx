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
		"content": `<style>.dn86-d-nc {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5m-3-12c-5 .5-7 4.5-6.75 8.25C13.5 12.5 16.5 9.5 16.5 4.5M9 14l3.5-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n13x6dbmu {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19");
}
</style><g class="hntgybcog"><path class="n13x6dbmu"/><path class="dn86-d-nc"/></g>`,
		"fallback": "uix:genre-poetry",
	});
}

export default Component;
