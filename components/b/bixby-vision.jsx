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
		"content": `<style>.bd_wkeb8q {
  cx: 24px;
  cy: 24px;
  r: 1.501px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j7htlubui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 37.934c8.9 0 19.5-8.18 19.5-13.934S32.9 10.066 24 10.066m0 27.868c-8.9 0-19.5-8.18-19.5-13.934S15.1 10.066 24 10.066");
}

.uskxsktlc {
  cx: 24px;
  cy: 24px;
  r: 8.392px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="bd_wkeb8q"/><circle class="uskxsktlc"/><path class="j7htlubui"/>`,
		"fallback": "arcticons:bixby-vision",
	});
}

export default Component;
