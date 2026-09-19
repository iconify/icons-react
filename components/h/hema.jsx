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
		"content": `<style>.ggrtlrbtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.226 27.672v-7.353l3.68 7.362l3.681-7.35v7.35M10.5 20.319v7.362m4.877-7.362v7.362M10.5 23.986h4.877m2.112.014h2.4m1.281 3.681h-3.681v-7.362h3.681m15.522 4.923h-3.261m-.808 2.439l2.439-7.362l2.438 7.362");
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
</style><rect class="j3s9ivbxi"/><path class="ggrtlrbtp"/>`,
		"fallback": "arcticons:hema",
	});
}

export default Component;
