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
		"content": `<style>.a2f-6zbpz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 19A5 5 0 0 1 7 9c1.819-6.366 9.638-6.116 11 0m1 4a4.472 4.472 0 0 1 0 8m3 0h-3v-3m-4 3a4.472 4.472 0 0 1 0-8m-3 0h3v3");
}

.ft5dv1b6b {
  fill: none;
}

.u6-difbky {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 19A5 5 0 0 1 7 9c1.819-6.366 9.638-6.116 11 0h-6a4 4 0 0 0-4 4v6Z");
}
</style><g class="ft5dv1b6b"><path class="u6-difbky"/><path class="a2f-6zbpz"/></g>`,
		"fallback": "coolicons:cloud-sync-corner-duotone-round",
	});
}

export default Component;
