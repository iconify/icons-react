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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzc30o_8q {
  d: path("M9 3C6 3 5.5 6.5 8 9.5l8 11");
}

.z963z9bsq {
  d: path("M15 3c3 0 3.5 3.5 1 6.5l-8 11");
}
</style><g class="ulnmmdpxh"><path class="yzc30o_8q"/><path class="z963z9bsq"/></g>`,
		"fallback": "uix-sharp:cancer-ribbon",
	});
}

export default Component;
