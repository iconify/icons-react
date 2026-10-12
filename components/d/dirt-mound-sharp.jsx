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
		"content": `<style>.d9c9_9b1w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 17h.01m3.99-2h.01M15 17.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.yfl9_1b4e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25C3.75 14 7.25 10 12 10s8.25 4 9.25 10.25Z");
}

.z_9qi1hcx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.75 10.75v-6.5m-1.5 0h3");
}
</style><g class="ux2u0rbkq"><path class="yfl9_1b4e"/><path class="d9c9_9b1w"/><path class="z_9qi1hcx"/></g>`,
		"fallback": "iconoven:dirt-mound-sharp",
	});
}

export default Component;
