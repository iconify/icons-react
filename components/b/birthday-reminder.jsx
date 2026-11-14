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
		"content": `<style>.pgq6wfb9g {
  d: path("M2.5 13q1.75 2 3.5 0q1.75 2 3.5 0q1.75 2 3.5 0q1.088 1.244 2.176.941M9.5 5.5v4m0-6.75h.01M15.5 20.5H21c-1-1-1-2-1-3.25a1.75 1.75 0 0 0-3.5 0c0 1.25 0 2.25-1 3.25Z");
}

.t7g7kc2vl {
  d: path("M13.7 18H2.5V9.5h14V13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t7g7kc2vl"/><path class="pgq6wfb9g"/></g>`,
		"fallback": "uix-sharp:birthday-reminder",
	});
}

export default Component;
