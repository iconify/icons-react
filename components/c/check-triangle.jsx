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
		"content": `<style>.ha-dbsbzk {
  d: path("m12 2.5l9.75 18.25H2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4d4_sb8y {
  d: path("M8.25 15.75L10.5 18l4-4.75");
}
</style><g class="ulnmmdpxh"><path class="ha-dbsbzk"/><path class="v4d4_sb8y"/></g>`,
		"fallback": "uix-sharp:check-triangle",
	});
}

export default Component;
