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
		"content": `<style>.myeclem6u {
  d: path("m2.5 6l9.5 4l9.5-4M12 10v4.5m-6.5 7l6.5-7l6.5 7");
}

.oucyhqwrj {
  d: path("M10 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oucyhqwrj"/><path class="myeclem6u"/></g>`,
		"fallback": "uix-sharp:full-body-workout",
	});
}

export default Component;
