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
		"content": `<style>.iwu1lkbbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h8v15.5H8ZM3 5l5-2v15.5l-5-2Zm13-2l5 2v11.5l-5 2ZM2.5 21h19M8 9.5h8");
}
</style><path class="iwu1lkbbc"/>`,
		"fallback": "uix-sharp:bay-window",
	});
}

export default Component;
