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
		"content": `<style>.q54946azd {
  width: 16.775px;
  height: 32.259px;
  x: 22.89px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.29px;
}

.qpo6olg9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.11 37.759v3.451a1.29 1.29 0 0 1-1.29 1.29H9.626a1.29 1.29 0 0 1-1.29-1.29V11.532a1.29 1.29 0 0 1 1.29-1.29H22.89M15.722 24.72H31.42m-11.933-2.806l-3.765 2.805m12.004 2.948l3.694-2.948");
}
</style><rect class="q54946azd"/><path class="qpo6olg9v"/>`,
		"fallback": "arcticons:clone-phone",
	});
}

export default Component;
