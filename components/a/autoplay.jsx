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
		"content": `<style>.d5cgy1yrk {
  d: path("M18.25 5.75a8.75 8.75 0 1 1-12.5 0");
}

.jy3z01sga {
  d: path("M3.25 5.75h2.5v2.5M9.5 8l6.5 4l-6.5 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d5cgy1yrk"/><path class="jy3z01sga"/></g>`,
		"fallback": "uix-sharp:autoplay",
	});
}

export default Component;
