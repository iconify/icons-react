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
		"content": `<style>.dplbpebxb {
  d: path("M2.5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.fb9yq9_-h {
  fill: currentColor;
  d: path("M10 15.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dplbpebxb"/><path class="fb9yq9_-h"/></g>`,
		"fallback": "uix-sharp:cloning",
	});
}

export default Component;
