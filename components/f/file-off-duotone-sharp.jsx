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

.wi9z29bhf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 3l6 6v6L7 3Zm6 18H5V7Z");
}

.ytcxscm9q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H7M5 7v14h14m0-6V9m-6-6l6 6m-6-6v6h6M2 4l18 18");
}
</style><g class="ft5dv1b6b"><path class="wi9z29bhf"/><path class="ytcxscm9q"/></g>`,
		"fallback": "coolicons:file-off-duotone-sharp",
	});
}

export default Component;
