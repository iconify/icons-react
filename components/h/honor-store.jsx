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
		"content": `<style>.pg2z1bbvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16 13.5a8 8 0 1 1 16 0M20.626 24v8m6.748-8v8m-6.748-4.015h6.748");
}

.u1a0m2bhs {
  width: 37px;
  height: 29px;
  x: 5.5px;
  y: 13.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="u1a0m2bhs"/><path class="pg2z1bbvw"/>`,
		"fallback": "arcticons:honor-store",
	});
}

export default Component;
