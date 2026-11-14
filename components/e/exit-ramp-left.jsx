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
		"content": `<style>.fzryzxb-d {
  d: path("M17.5 2.5v19m0-4c0-4-2.5-5.5-5-8L6 3");
}

.pf5k29b9w {
  d: path("M6 8.5V3h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fzryzxb-d"/><path class="pf5k29b9w"/></g>`,
		"fallback": "uix-sharp:exit-ramp-left",
	});
}

export default Component;
