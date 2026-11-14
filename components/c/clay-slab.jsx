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
		"content": `<style>.n80yh07df {
  d: path("M2.5 13v4h14l5-5.5v-4m-5 5.5v4");
}

.tpst6nb5i {
  d: path("m2.5 13l5-5.5h14l-5 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tpst6nb5i"/><path class="n80yh07df"/></g>`,
		"fallback": "uix-sharp:clay-slab",
	});
}

export default Component;
