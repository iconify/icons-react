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
		"content": `<style>.c8fp0s1gc {
  d: path("M3 6h18v13H3Z");
}

.rf_uw0bze {
  d: path("M6 12.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm9-3h3.5v3H15Zm.5-6h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8fp0s1gc"/><path class="rf_uw0bze"/></g>`,
		"fallback": "uix-sharp:action-camera",
	});
}

export default Component;
