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
		"content": `<style>.irli1ibut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.5h14.5V9H4.75zM6.5 9.75v7.583L9 19m1.5-9.25v8m3-8v8m4-8v7.583L15 19");
}
</style><path class="irli1ibut"/>`,
		"fallback": "iconoven:hair-clip-sharp",
	});
}

export default Component;
