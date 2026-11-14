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
		"content": `<style>.j_gieqbmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5H4.5v-16h15v6.1m-12-8.85h9M8 9.5h8m-8 4h8m-8 4h4m3 3.5l.75-2.75l3.75-3.75a1.5 1.5 0 0 1 2 2l-3.75 3.75Z");
}
</style><path class="j_gieqbmr"/>`,
		"fallback": "uix-sharp:epic-edit",
	});
}

export default Component;
