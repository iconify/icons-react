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
		"content": `<style>.ae92awdvc {
  d: path("M3.5 3H15v18.5H3.5ZM15 12.5h1.75a1 1 0 0 1 1 1V17a1.5 1.5 0 0 0 3 0V8l-2.5-2.5M6.5 8v8");
}

.rzy4jubdg {
  d: path("M6.5 8H8a4 4 0 0 1 0 8H6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ae92awdvc"/><path class="rzy4jubdg"/></g>`,
		"fallback": "uix-sharp:diesel",
	});
}

export default Component;
