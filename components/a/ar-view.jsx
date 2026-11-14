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
		"content": `<style>.q9sdubo-y {
  d: path("m7 8.75l5 2.75l5-2.75m-5 2.75V18M2.5 7V4.5a2 2 0 0 1 2-2H7m10 0h2.5a2 2 0 0 1 2 2V7m0 10v2.5a2 2 0 0 1-2 2H17m-10 0H4.5a2 2 0 0 1-2-2V17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzm0jgb6t {
  d: path("m12 6l5 2.75v6.5L12 18l-5-2.75v-6.5Z");
}
</style><g class="ulnmmdpxh"><path class="vzm0jgb6t"/><path class="q9sdubo-y"/></g>`,
		"fallback": "uix-sharp:ar-view",
	});
}

export default Component;
