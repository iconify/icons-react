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
		"content": `<style>.i9qc87h4h {
  d: path("m15.5 8.5l2.25-2.25h2.75m-2.75 0V3.5m-9.25 5L6.25 6.25H3.5m2.75 0V3.5m9.25 12l2.25 2.25h2.75m-2.75 0v2.75m-9.25-5l-2.25 2.25H3.5m2.75 0v2.75M12 12h.01");
}

.jh--vwb6r {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jh--vwb6r"/><path class="i9qc87h4h"/></g>`,
		"fallback": "uix-sharp:bone-cell",
	});
}

export default Component;
