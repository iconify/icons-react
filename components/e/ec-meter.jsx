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
		"content": `<style>.cedk8it4c {
  d: path("M6.25 5.25h3.5v3h-3.5ZM18 13.5c1.5 1.75 3 3.5 3 5a3 3 0 0 1-6 0c0-1.5 1.5-3.25 3-5Z");
}

.qb-qmccde {
  d: path("M3.5 2.5h9v12h-9Zm4.5 12v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qb-qmccde"/><path class="cedk8it4c"/></g>`,
		"fallback": "uix-sharp:ec-meter",
	});
}

export default Component;
