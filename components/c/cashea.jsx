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
		"content": `<style>.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.l-rjbnbzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.855 24c0 5.443-4.412 9.855-9.855 9.855S14.145 29.443 14.145 24s4.412-9.855 9.855-9.855v5.028A4.827 4.827 0 1 0 28.827 24z");
}
</style><rect class="jc1oydeao"/><path class="l-rjbnbzl"/>`,
		"fallback": "arcticons:cashea",
	});
}

export default Component;
