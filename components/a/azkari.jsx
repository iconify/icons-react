import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p7sh5zbbb {
  cx: 24px;
  cy: 29.5px;
  r: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yfikv21vp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.983 22.167L24 29.5l-4.983-7.333M24 36.833V29.5m-4.701 0h9.402m-9.402 3.666h9.402M17 17.376V11.5c0-3.878 3.122-7 7-7s7 3.122 7 7v5.876");
}
</style><circle class="p7sh5zbbb"/><path class="yfikv21vp"/>`,
		"fallback": "arcticons:azkari",
	});
}

export default Component;
