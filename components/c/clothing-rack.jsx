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
		"content": `<style>.grygxjbqf {
  d: path("M7.75 4.5v2l2.5 2.25v7.75h-5V8.75l2.5-2.25m8.5-2v2l2.25 2l.25 8.5h-5L14 8.5l2.25-2");
}

.hjiokve4n {
  d: path("M2.5 21.5v-17h19v17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hjiokve4n"/><path class="grygxjbqf"/></g>`,
		"fallback": "uix-sharp:clothing-rack",
	});
}

export default Component;
