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
		"content": `<style>.iefuxbbix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 18l5-12Q9.25 8 11 6q1.75 2 3.5 0q1.75 2 3.5 0q1.75 2 3.5 0l-5 12q-1.75 2-3.5 0q-1.75 2-3.5 0q-1.75 2-3.5 0q-1.75 2-3.5 0ZM6 18l5-12M9.5 18l5-12M13 18l5-12");
}
</style><path class="iefuxbbix"/>`,
		"fallback": "uix-sharp:corrugated-roof",
	});
}

export default Component;
