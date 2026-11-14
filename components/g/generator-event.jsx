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
		"content": `<style>.c7rk0uhzz {
  d: path("M10.5 10.75L7.75 14.5H11l-2.75 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zcr9vvbxo {
  d: path("M2.5 8H16v12.5H2.5Zm3 0V4.5h5V8M13 8V3.5h2.5M16 14h2.5c1 0 1.75.75 1.75 2v1m-1.5 0h2.75v3h-2.75Z");
}
</style><g class="ulnmmdpxh"><path class="zcr9vvbxo"/><path class="c7rk0uhzz"/></g>`,
		"fallback": "uix-sharp:generator-event",
	});
}

export default Component;
