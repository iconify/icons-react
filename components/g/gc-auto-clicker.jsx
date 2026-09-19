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
		"content": `<style>.bc0t19pdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.932 42.5l-2.252-3.555c-1.582-2.498 1.544-6.688 4.958-2.768l1.671 1.918V21.836c0-3.406 5.775-3.265 5.828-.375l.15 8.154c1.966-2.858 5.12-1.047 5.428.826l.25 1.526c2.051-3.403 5.217-1.078 5.278-.25l.275 3.751c1.287-3.161 5.476-1.921 5.503-.075V42.2");
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

.jlyoq8pbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.14 23.405a5.5 5.5 0 1 1 9.78-.026");
}

.nhd74ib_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.273 27.214a10 10 0 1 1 16.384-.802");
}
</style><path class="bc0t19pdr"/><path class="jlyoq8pbx"/><path class="nhd74ib_w"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:gc-auto-clicker",
	});
}

export default Component;
