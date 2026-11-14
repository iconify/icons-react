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
		"content": `<style>.d925dqbjv {
  d: path("M3 4.5h18V21H3Zm5-2v4m8-4v4");
}

.fd3515rqr {
  d: path("M10 13.5c0-3 2.25-4.25 5-4m-1 4c0 3-2.25 4.25-5 4");
}

.pw_9hdy_j {
  d: path("M10 13.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d925dqbjv"/><path class="pw_9hdy_j"/><path class="fd3515rqr"/></g>`,
		"fallback": "uix-sharp:hurricane-season",
	});
}

export default Component;
