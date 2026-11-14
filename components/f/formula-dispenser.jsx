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
		"content": `<style>.rve-ifblg {
  d: path("M6 9h12v12.5H6ZM5 6h14v3H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yyq6y1b0t {
  d: path("m6.5 3.5l6.5-1h5c0 4.75-5 4.75-5 0");
}
</style><g class="ulnmmdpxh"><path class="rve-ifblg"/><path class="yyq6y1b0t"/></g>`,
		"fallback": "uix-sharp:formula-dispenser",
	});
}

export default Component;
