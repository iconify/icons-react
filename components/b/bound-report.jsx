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
		"content": `<style>.fmt0uc0en {
  d: path("M10.5 6h6.25v4H10.5Z");
}

.o_d9uib9w {
  d: path("M4.5 2.5h15v19h-15Zm3.25 0v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o_d9uib9w"/><path class="fmt0uc0en"/></g>`,
		"fallback": "uix-sharp:bound-report",
	});
}

export default Component;
