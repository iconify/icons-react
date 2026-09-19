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
		"content": `<style>.alk8ko5pa {
  cx: 24px;
  cy: 35px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jhmq-bc0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.5 12h9");
}

.tl1mwm89a {
  width: 27.186px;
  height: 37px;
  x: 10.407px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5px;
}
</style><rect class="tl1mwm89a"/><path class="jhmq-bc0k"/><circle class="alk8ko5pa"/>`,
		"fallback": "arcticons:huawei-findmyphone",
	});
}

export default Component;
