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
		"content": `<style>.b67lwhfuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.371 24h4.033m2.153 6.186h-6.186V17.814h6.186m9.943 4.098a4.098 4.098 0 0 0-8.197 0v4.176a4.098 4.098 0 0 0 8.197 0h-4.098m-16.063 0h-5.481M10.5 30.186l4.098-12.372l4.099 12.372");
}

.j3s9ivbxi {
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
</style><rect class="j3s9ivbxi"/><path class="b67lwhfuz"/>`,
		"fallback": "arcticons:aeg",
	});
}

export default Component;
