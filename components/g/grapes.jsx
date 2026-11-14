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
		"content": `<style>.c6actfflk {
  d: path("M5.5 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm7 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.l0gd08sdg {
  d: path("M9 14.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm1.25 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM12 3v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c6actfflk"/><path class="l0gd08sdg"/></g>`,
		"fallback": "uix-sharp:grapes",
	});
}

export default Component;
