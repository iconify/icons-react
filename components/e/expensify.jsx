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
		"content": `<style>.nzszbiy_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 36H18V12h12");
}

.oc_tz0b1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.766 11.891a21.5 21.5 0 0 1 .002 24.215m-35.536 0A21.5 21.5 0 0 1 2.5 24C2.5 12.126 12.126 2.5 24 2.5h0a21.5 21.5 0 0 1 12.109 3.734m-.003 35.534a21.5 21.5 0 0 1-24.212 0M18 24h7.824");
}
</style><path class="oc_tz0b1m"/><path class="nzszbiy_u"/>`,
		"fallback": "arcticons:expensify",
	});
}

export default Component;
