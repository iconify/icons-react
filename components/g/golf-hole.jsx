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
		"content": `<style>.kb8fep26r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14H9v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5h6.5M12 18V3m0 0l6.5 2.75L12 8.5Z");
}
</style><path class="kb8fep26r"/>`,
		"fallback": "uix-sharp:golf-hole",
	});
}

export default Component;
