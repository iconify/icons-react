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
		"content": `<style>.b881pcc9g {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 13v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-4a7 7 0 1 1 14 0");
}

.ft5dv1b6b {
  fill: none;
}

.vtq_6frdz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 13a7 7 0 0 1 14 0v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm7-7V3m-2 0h4m-5 8v6m6-6v6m-6-3h6");
}
</style><g class="ft5dv1b6b"><path class="b881pcc9g"/><path class="vtq_6frdz"/></g>`,
		"fallback": "coolicons:hydrogen-duotone-round",
	});
}

export default Component;
