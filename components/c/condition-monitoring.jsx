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
		"content": `<style>.e806y8boy {
  d: path("M3 4.5h14v13H3Zm2.5 13l-1 3h11l-1-3M17 11h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x99fvy-7v {
  d: path("M5.5 11h2L9 8l2 6l1.5-3h2");
}
</style><g class="ulnmmdpxh"><path class="e806y8boy"/><path class="x99fvy-7v"/></g>`,
		"fallback": "uix-sharp:condition-monitoring",
	});
}

export default Component;
