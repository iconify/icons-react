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
		"content": `<style>.p0ov38bko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8h10v13.5H4Zm2-4.5h6V8H6Zm6 2h4m-12 7h10M4 17h10m5-9s2 2.5 2 3.75a2 2 0 0 1-4 0C17 10.5 19 8 19 8Z");
}
</style><path class="p0ov38bko"/>`,
		"fallback": "uix-sharp:conditioner-bottle",
	});
}

export default Component;
