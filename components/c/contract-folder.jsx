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
		"content": `<style>.hlie_gb9s {
  d: path("M2.5 10a2 2 0 0 1 2-2h2l2 2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Zm13.25-7.5v3.75h3.75");
}

.ownep8bqj {
  d: path("M11.25 10V2.5h4.5l3.75 3.75V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ownep8bqj"/><path class="hlie_gb9s"/></g>`,
		"fallback": "uix-sharp:contract-folder",
	});
}

export default Component;
