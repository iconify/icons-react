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
		"content": `<style>.ctm5six4z {
  d: path("M2.5 7.25h19a9.5 9.5 0 0 1-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_xfh_-pz {
  d: path("M5.5 7.25a6.5 6.5 0 0 0 13 0");
}
</style><g class="ulnmmdpxh"><path class="ctm5six4z"/><path class="y_xfh_-pz"/></g>`,
		"fallback": "uix-sharp:dried-mango",
	});
}

export default Component;
