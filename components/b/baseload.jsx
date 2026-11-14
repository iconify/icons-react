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
		"content": `<style>.d2rpf3bzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 18.5l3.5-16h3l3.5 16M4.5 6.5h15M6 11.5h12m-15.5 10h19");
}
</style><path class="d2rpf3bzc"/>`,
		"fallback": "uix-sharp:baseload",
	});
}

export default Component;
