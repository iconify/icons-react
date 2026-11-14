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
		"content": `<style>.uj_jeegfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19m-18-6H7v6H3.5Zm6.75-3h3.5v9h-3.5ZM17 12h3.5v8H17Z");
}
</style><path class="uj_jeegfg"/>`,
		"fallback": "uix-sharp:budget-deficit",
	});
}

export default Component;
