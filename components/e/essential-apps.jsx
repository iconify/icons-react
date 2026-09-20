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
		"content": `<style>.bry3ye_wi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15 24h18m-15.364-6.364l12.728 12.728m-19.445 6.717l26.163-26.163");
}

.ppnm_lbmv {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 19.5px;
  ry: 11.5px;
}
</style><ellipse class="ppnm_lbmv"/><path class="bry3ye_wi"/>`,
		"fallback": "arcticons:essential-apps",
	});
}

export default Component;
