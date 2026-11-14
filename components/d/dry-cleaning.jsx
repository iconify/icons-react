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
		"content": `<style>.crk4ftegl {
  d: path("M10 4.5a2 2 0 1 1 2 2V8m2.85 13H6.5v-7.5l-2 1l-1.5-4L8.5 8h7l5.5 2.5l-1.5 4l-2-1v.95");
}

.t-8malb6c {
  d: path("M18.5 15q.5 2.75 3.25 3.25q-2.75.5-3.25 3.25q-.5-2.75-3.25-3.25Q18 17.75 18.5 15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="crk4ftegl"/><path class="t-8malb6c"/></g>`,
		"fallback": "uix-sharp:dry-cleaning",
	});
}

export default Component;
