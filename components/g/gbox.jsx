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

.xyfm9ib1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.635 15.538v2.409L23.426 13.5l-9.061 3.768v13.279l9.061 3.953l8.727-3.891v-5.168L24 21.776v4.201");
}
</style><rect class="j3s9ivbxi"/><path class="xyfm9ib1s"/>`,
		"fallback": "arcticons:gbox",
	});
}

export default Component;
