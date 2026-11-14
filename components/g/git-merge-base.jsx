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
		"content": `<style>.lmcqfkbja {
  fill: currentColor;
  d: path("M10 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.os96kc9og {
  d: path("M4 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wsa8k1bzc {
  d: path("M6 7v1.5c0 3 6 3.5 6 6.5v2m6-10v1.5c0 3-6 3.5-6 6.5");
}
</style><g class="ulnmmdpxh"><path class="os96kc9og"/><path class="wsa8k1bzc"/><path class="lmcqfkbja"/></g>`,
		"fallback": "uix-sharp:git-merge-base",
	});
}

export default Component;
