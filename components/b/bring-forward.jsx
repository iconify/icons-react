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
		"content": `<style>.e5ajikb4j {
  d: path("M8 13.5H4.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V8");
}

.oq9h3b2jm {
  d: path("M8 8h13.5v13.5H8Zm10.75 0V2.5M16.5 4.75l2.25-2.25L21 4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e5ajikb4j"/><path class="oq9h3b2jm"/></g>`,
		"fallback": "uix-sharp:bring-forward",
	});
}

export default Component;
