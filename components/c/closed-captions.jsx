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
		"content": `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.tvqfwl_6c {
  d: path("M10.5 10.5c-2.5-1.75-4-.5-4 1.5s1.5 3.25 4 1.5m7-3c-2.5-1.75-4-.5-4 1.5s1.5 3.25 4 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="tvqfwl_6c"/></g>`,
		"fallback": "uix-sharp:closed-captions",
	});
}

export default Component;
