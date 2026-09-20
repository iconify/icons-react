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

.khc3-bbpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.21 34a2.97 2.97 0 0 1-2.713-1.76L24 22.15l-2.635 5.912h.838a2.969 2.969 0 0 1 0 5.937H16.79a2.97 2.97 0 0 1-2.711-4.178l5.886-13.202A4.42 4.42 0 0 1 24 13.999a4.42 4.42 0 0 1 4.035 2.62l5.886 13.203A2.97 2.97 0 0 1 31.21 34");
}
</style><rect class="j3s9ivbxi"/><path class="khc3-bbpk"/>`,
		"fallback": "arcticons:adobe-express",
	});
}

export default Component;
