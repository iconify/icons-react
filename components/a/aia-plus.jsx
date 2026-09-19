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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.scqi-zb2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.716 20.975v6.05M31.69 24h6.05m-15.007 3.3l3.307-6.6l3.308 6.6m-1.095-2.186s-1.056.3-2.212.3c-1.155 0-2.211-.3-2.211-.3M10.26 27.3l3.307-6.6l3.307 6.6m-1.094-2.186s-1.057.3-2.212.3s-2.212-.3-2.212-.3m8.449-4.414v6.6");
}
</style><path class="scqi-zb2i"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:aia-plus",
	});
}

export default Component;
