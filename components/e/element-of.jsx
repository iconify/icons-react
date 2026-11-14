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
		"content": `<style>.taqxgzbys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 5.5H12a6.5 6.5 0 0 0 0 13h6.5M5.5 12h13");
}
</style><path class="taqxgzbys"/>`,
		"fallback": "uix-sharp:element-of",
	});
}

export default Component;
