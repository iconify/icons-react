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
		"content": `<style>.r73cxn7qa {
  width: 39px;
  height: 26.768px;
  x: 4.5px;
  y: 7.97px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.055px;
  ry: 3.055px;
}

.viwhscc1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.739 34.73v2.908a2.387 2.387 0 0 0 2.393 2.392h15.091a2.387 2.387 0 0 0 2.393-2.392V34.73zm3.091-12.552h7.225m-.01-10.528v10.535");
}
</style><rect class="r73cxn7qa"/><path class="viwhscc1l"/>`,
		"fallback": "arcticons:daily-board",
	});
}

export default Component;
