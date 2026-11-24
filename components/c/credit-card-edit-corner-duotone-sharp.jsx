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
		"content": `<style>.bs48nipqm {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 9H9v10H3V5h18Zm-8 12v-3l5-5l3 3l-5 5Z");
}

.e2_w36bgc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 9V5H3v14h6M3 9h18m-8 12v-3l5-5l3 3l-5 5Z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="bs48nipqm"/><path class="e2_w36bgc"/></g>`,
		"fallback": "coolicons:credit-card-edit-corner-duotone-sharp",
	});
}

export default Component;
