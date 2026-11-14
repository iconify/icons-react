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
		"content": `<style>.fsuih5bgb {
  d: path("M4 20.5L5.5 10L10 4l6.5 1l3.5 6.5v9m-17.5 0h19");
}

.njf101bql {
  d: path("M9.5 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-6 2.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fsuih5bgb"/><path class="njf101bql"/></g>`,
		"fallback": "uix-sharp:boulder-problem",
	});
}

export default Component;
