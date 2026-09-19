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
		"content": `<style>.j3s9ivbxi {
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

.jw-x3kbnj {
  fill: none;
  stroke: currentColor;
  d: path("M5.5 15.809h18.547V5.5M5.5 38.85h18.547V15.809H42.5m-18.453 6.633H42.5M24.047 8.89H42.5m-37 16.842h37M24.047 38.85H42.5m-18.453-3.452H42.5");
}
</style><rect class="j3s9ivbxi"/><path class="jw-x3kbnj"/>`,
		"fallback": "arcticons:geologicaltimescale",
	});
}

export default Component;
