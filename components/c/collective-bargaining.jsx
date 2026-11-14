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
		"content": `<style>.gfx3zab0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.617 12.347L6.5 9.5h-4v-4h4l10-3.5v9.705M6 9.5L7.5 14m6.75 2.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM13 21.75c0-1.5 1.25-2.5 3-2.5s3 1 3 2.5m-.25-7.799a1.5 1.5 0 1 1 .237 2.709M20 18.5c1 .25 1.75 1.25 1.75 3");
}
</style><path class="gfx3zab0y"/>`,
		"fallback": "uix-sharp:collective-bargaining",
	});
}

export default Component;
