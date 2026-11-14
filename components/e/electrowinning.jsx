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
		"content": `<style>.m2unfn4au {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9v10.5A1.5 1.5 0 0 0 5 21h14a1.5 1.5 0 0 0 1.5-1.5V9M6 3.5h12M3.5 12h17M8 3.5v14m4-14v14m4-14v14");
}
</style><path class="m2unfn4au"/>`,
		"fallback": "uix-sharp:electrowinning",
	});
}

export default Component;
