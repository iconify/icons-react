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
		"content": `<style>.nbhc7cvik {
  d: path("M5.5 17.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-0_sxbwz {
  d: path("M6.25 16C3 12.25 4 3.75 12 3.75s9 8.5 5.75 12.25");
}
</style><g class="ulnmmdpxh"><path class="y-0_sxbwz"/><path class="nbhc7cvik"/></g>`,
		"fallback": "uix-sharp:bone-conduction-headphones",
	});
}

export default Component;
