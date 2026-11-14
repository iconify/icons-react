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
		"content": `<style>.rgpun-nqb {
  d: path("M15 6.75a1.5 1.5 0 0 1 3 0m-12.5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm10.25 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0uaejb3e {
  d: path("m2.5 5.25l1.5 8h17.5v-3.5l-3.25-3H15v6.5m-3.5 0l.75-8");
}
</style><g class="ulnmmdpxh"><path class="y0uaejb3e"/><path class="rgpun-nqb"/></g>`,
		"fallback": "uix-sharp:autonomous-haul-truck",
	});
}

export default Component;
