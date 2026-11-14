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
		"content": `<style>.k56oaebhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19v10h-19ZM4 11V5l.75-1.5h2L7.5 5v6m2.75 0V5L11 3.5h2l.75 1.5v6m2.75 0V5l.75-1.5h2L20 5v6M9.5 15.5h5");
}
</style><path class="k56oaebhr"/>`,
		"fallback": "uix-sharp:canned-drink-crate",
	});
}

export default Component;
