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
		"content": `<style>.aobh7zpcx {
  d: path("M9.5 20.5V14h5v6.5M5 8L2.5 3.5H7L9.5 8M19 8l2.5-4.5H17L14.5 8");
}

.gu3yahrnb {
  d: path("M5 8h14v12.5H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gu3yahrnb"/><path class="aobh7zpcx"/></g>`,
		"fallback": "uix-sharp:cardboard-box-play",
	});
}

export default Component;
