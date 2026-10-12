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
		"content": `<style>.kruh7zb1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3h3C9 6.5 10.25 9.5 12 9.5s3-3 4.25-6.5h4.25v14.5h-4.25v-7c-1.25 3-2.5 4.25-4.25 4.25S9 13.5 7.75 10.5v7H3.5V3zM4.5 15h2.25m10.5 0h2.25m-15 4.25V21m2.25-1.75V21m10.5-1.75V21m2.25-1.75V21");
}
</style><path class="kruh7zb1m"/>`,
		"fallback": "iconoven:dupatta-sharp",
	});
}

export default Component;
