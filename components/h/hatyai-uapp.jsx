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
		"content": `<style>.du5sp1_ul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.982 15.14v11.74c0 3.322 2.659 5.98 5.759 5.98s5.759-2.658 5.759-5.98V15.14m-26.914 8.638h11.738m0-8.638v17.72M10.5 15.083v17.834");
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
</style><path class="du5sp1_ul"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:hatyai-uapp",
	});
}

export default Component;
