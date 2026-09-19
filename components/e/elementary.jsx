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
		"content": `<style>.d3xv-tm0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.332 30.81h9.655M13.332 11.5h9.655m-9.655 9.655h6.275M13.332 11.5v19.31m16.75-.827L25.013 17.19m9.655 0l-6.034 17.379a2.82 2.82 0 0 1-2.655 1.931h-.725");
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
</style><rect class="j3s9ivbxi"/><path class="d3xv-tm0u"/>`,
		"fallback": "arcticons:elementary",
	});
}

export default Component;
