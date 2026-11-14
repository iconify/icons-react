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
		"content": `<style>.fcbjjpr7j {
  d: path("m4 12.5l4-4l4 4v6H4Zm10 9c0-3.5 5.5-4.5 5.5-9S14 7 14 3.5");
}

.lh606zbet {
  d: path("M11.5 6L14 3.5L16.5 6M8 18.5v-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fcbjjpr7j"/><path class="lh606zbet"/></g>`,
		"fallback": "uix-sharp:bypass",
	});
}

export default Component;
