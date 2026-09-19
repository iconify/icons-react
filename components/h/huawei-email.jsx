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
		"content": `<style>.nrzi54bje {
  width: 37px;
  height: 31px;
  x: 5.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.q7t7w6buw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 13c13.687 13.574 14.825 13.09 29 0");
}
</style><path class="q7t7w6buw"/><rect class="nrzi54bje"/>`,
		"fallback": "arcticons:huawei-email",
	});
}

export default Component;
