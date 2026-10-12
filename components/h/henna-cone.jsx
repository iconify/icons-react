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
		"content": `<style>.fv-8cjzax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.35 16.34l3.3-6.18q.35-.66.88-.13l2.44 2.44q.53.53-.13.88l-6.18 3.3q-.66.35-.31-.31m5.4-5.09L14 9m.2-.57l1.1-3.11q.2-.57.62-.15l1.91 1.91q.42.42-.15.62l-3.11 1.1q-.57.2-.37-.37M4.25 20c1.5-1 3 .25 4.5-.5s3 .5 4.5-.25");
}
</style><path class="fv-8cjzax"/>`,
		"fallback": "iconoven:henna-cone",
	});
}

export default Component;
