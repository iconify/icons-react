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
		"content": `<style>.c9t9s795d {
  d: path("M4.5 5h15M6 5l1.25 12.5h9.5L18 5m-8 0V3h4v2");
}

.siai8qbxq {
  d: path("M7 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-4-4.75c0-3.5 1.75-5.5 5-5.5c0 3.5-1.75 5.5-5 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c9t9s795d"/><path class="siai8qbxq"/></g>`,
		"fallback": "uix-sharp:bin-organic",
	});
}

export default Component;
