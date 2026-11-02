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
		"content": `<style>.f1c_pbj0v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 14v-2l3-3l3 3l6-6v10H7zM3 4v16h18");
}

.ft5dv1b6b {
  fill: none;
}

.zyseouhvp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m7 12l3-3l3 3l6-6v10H7Z");
}
</style><g class="ft5dv1b6b"><path class="zyseouhvp"/><path class="f1c_pbj0v"/></g>`,
		"fallback": "coolicons:chart-area-duotone-sharp",
	});
}

export default Component;
