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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nb0nz450i {
  d: path("M10 21.5V18h4v3.5M4 11a8 7.5 0 0 1 16 0");
}

.x95f6cc5w {
  d: path("m5.611 12.976l5.25-4.5a1.75 1.75 0 0 1 2.278 0l5.25 4.5A1.75 1.75 0 0 1 19 14.305v5.445a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 19.75v-5.445a1.75 1.75 0 0 1 .611-1.329");
}

.z2org3m-a {
  d: path("M18.25 9.25L20 11l1.75-1.75");
}
</style><g class="hntgybcog"><path class="x95f6cc5w"/><path class="nb0nz450i"/><path class="z2org3m-a"/></g>`,
		"fallback": "uix:house-flipping",
	});
}

export default Component;
