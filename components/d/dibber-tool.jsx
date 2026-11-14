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
		"content": `<style>.kd__efbom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12v3H6Zm4 3V12l2 8l2-8V6.5M2.5 17h6m7 0h6");
}
</style><path class="kd__efbom"/>`,
		"fallback": "uix-sharp:dibber-tool",
	});
}

export default Component;
