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
		"content": `<style>.ed61l6wxz {
  d: path("M12.2 16.5H2.5V4h17v8.2");
}

.hnwr9owsq {
  d: path("M9 13.5c-3-2.5-3.5-4-3-5c.75-1.5 2.5-1.25 3 .25c.5-1.5 2.25-1.75 3-.25c.5 1 0 2.5-3 5Zm6 3.5v-2h2m2.5 0h2v2m0 2.5v2h-2m-2.5 0h-2v-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ed61l6wxz"/><path class="hnwr9owsq"/></g>`,
		"fallback": "uix-sharp:health-card-scan",
	});
}

export default Component;
