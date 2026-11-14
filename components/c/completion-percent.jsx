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
		"content": `<style>.at1747bui {
  d: path("M7.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.qqfvldbaf {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM12 2.5v3m-3.5 10l7-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qqfvldbaf"/><path class="at1747bui"/></g>`,
		"fallback": "uix-sharp:completion-percent",
	});
}

export default Component;
