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
		"content": `<style>.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ypm311bxb {
  d: path("M4.75 12h15.5v3.75");
}

.zxujzjbsj {
  d: path("M3.75 18.75h16.5v2.5H3.75zm4.5-16h7.5v2.5h-7.5zM12 5.25L6.5 12l5.5 6.75L17.5 12Z");
}
</style><g class="x2cwu0gfd"><path class="zxujzjbsj"/><path class="ypm311bxb"/></g>`,
		"fallback": "iconoven:car-jack-sharp",
	});
}

export default Component;
