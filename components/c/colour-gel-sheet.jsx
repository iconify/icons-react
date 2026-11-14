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
		"content": `<style>.acrcnfbwl {
  d: path("M3 7h13.5v14H7l-4-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ut-7gmbbp {
  d: path("m8.5 7l1-4.5l12 2.5l-2.75 13l-2.25-.5m-9.5-1l5.5-5.5");
}
</style><g class="ulnmmdpxh"><path class="acrcnfbwl"/><path class="ut-7gmbbp"/></g>`,
		"fallback": "uix-sharp:colour-gel-sheet",
	});
}

export default Component;
