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
		"content": `<style>.ckcketfhn {
  d: path("M9 15A6 6 0 0 1 9 3m9.75 17.5c-2.25 0-2.75-2-2.25-3.5s2.25-2.5 2.25-4.5c1.75 1.5 2.75 3.5 2.5 5c-.25 2-1.25 3-2.5 3Z");
}

.jh3y0wbhi {
  d: path("m3 9l1.75 11.5h8.5L15 9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jh3y0wbhi"/><path class="ckcketfhn"/></g>`,
		"fallback": "uix-sharp:fire-safety-bucket",
	});
}

export default Component;
