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
		"content": `<style>.yjjtc9brm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v13h-19Zm4.5 13L5 21m12-4.5l2 4.5M6.5 7.5H11M6.5 11H9m5-4.5V11m-2.25-2.25h4.5");
}
</style><path class="yjjtc9brm"/>`,
		"fallback": "uix-sharp:chalk-equations",
	});
}

export default Component;
