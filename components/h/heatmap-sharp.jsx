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
		"content": `<style>.ezm81yf6g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19.25h.01m7.24 0h.01");
}

.h5ugdc6tw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 17.25h2.75v4h-4v-4z");
}

.in_yp6bue {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.25 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zn0n03b0e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h4v4h-4zm7.25 0h4v4h-4zm8.5 0h2.75v4h-4v-4zM2.75 10h4v4h-4zM10 10h4v4h-4z");
}
</style><g class="ux2u0rbkq"><path class="zn0n03b0e"/><path class="in_yp6bue"/><path class="h5ugdc6tw"/><path class="ezm81yf6g"/></g>`,
		"fallback": "iconoven:heatmap-sharp",
	});
}

export default Component;
