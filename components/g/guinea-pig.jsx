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
		"content": `<style>.d5jwedbro {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.5c0-3.5 3-6.25 7-6.25H14c4 0 7 2.75 7 6.25c0 2.5-2 4.25-4.5 4.25H7c-2 0-3.5-2-3.5-4.25");
}

.h68bgsaql {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.25 11.75h.01");
}

.xq91snbqu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.6 8.1C7 6.5 8 5.25 9.4 5.5c.75.15 1.1 1 .95 2ZM7 17.75v1.75m10-1.75v1.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="d5jwedbro"/><path class="xq91snbqu"/><path class="h68bgsaql"/></g>`,
		"fallback": "iconoven:guinea-pig",
	});
}

export default Component;
