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
		"content": `<style>.emq1-5ebd {
  d: path("M9.75 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 6h4.5V17h-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vsfpwigiu {
  d: path("M7 3h10l4 17H3Z");
}
</style><g class="ulnmmdpxh"><path class="vsfpwigiu"/><path class="emq1-5ebd"/></g>`,
		"fallback": "uix-sharp:cornhole",
	});
}

export default Component;
