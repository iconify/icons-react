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
		"content": `<style>.pcj-_rigq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 4.5h14a5.5 5.5 0 1 1 0 11H17a5.5 5.5 0 1 1 0-11");
}

.wd9i8zbsg {
  cx: 31px;
  cy: 24px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xfgcmxqle {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 18.5za5.5 5.5 0 0 1 5.5 5.5v14a5.5 5.5 0 1 1-11 0V24a5.5 5.5 0 0 1 5.5-5.5");
}
</style><path class="pcj-_rigq"/><circle class="wd9i8zbsg"/><path class="xfgcmxqle"/>`,
		"fallback": "arcticons:flashacademy",
	});
}

export default Component;
