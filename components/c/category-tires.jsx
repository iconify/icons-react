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
		"content": `<style>.il-rnqb5b {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0Z");
}

.iwz8atb5f {
  d: path("M5.75 12a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0ZM21 15.75l-3.25-1.25M21 8.25L17.75 9.5M3 15.75l3.25-1.25M3 8.25L6.25 9.5m9.5 11.5l-1.25-3.25M8.25 21l1.25-3.25M15.75 3L14.5 6.25M8.25 3L9.5 6.25");
}

.o1o1z0zae {
  fill: currentColor;
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="il-rnqb5b"/><path class="iwz8atb5f"/><path class="o1o1z0zae"/></g>`,
		"fallback": "uix-sharp:category-tires",
	});
}

export default Component;
