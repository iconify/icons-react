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
		"content": `<style>.gp-psum3l {
  d: path("M9.5 2.5V11L12 9l2.5 2V2.5");
}

.j9ce5qb8d {
  d: path("M4.5 2.5h15v19h-15Zm0 14h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j9ce5qb8d"/><path class="gp-psum3l"/></g>`,
		"fallback": "uix-sharp:ereader",
	});
}

export default Component;
