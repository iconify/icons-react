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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.jwb6q5bhe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 20H9v-5.078c0-1.215.552-2.364 1.501-3.123l1-.8a4 4 0 0 1 4.998 0l1 .8A4 4 0 0 1 19 14.922Z");
}

.xlbqi_bda {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M9 20v-5.078a4 4 0 0 1 1.501-3.123l1-.8a4 4 0 0 1 4.998 0l1 .8A4 4 0 0 1 19 14.923V20m-7-9.4V4H9a4 4 0 0 0-4 4v12");
}
</style><g class="ft5dv1b6b"><path class="jwb6q5bhe"/><path class="xlbqi_bda"/></g>`,
		"fallback": "coolicons:building-1-duotone-round",
	});
}

export default Component;
