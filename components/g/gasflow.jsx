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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ncscgwo0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 9.61a9.15 9.15 0 0 1 9.14 9.14h0A9.15 9.15 0 0 1 24 27.88h0a9.14 9.14 0 1 1 0-18.27m4.57 4.57l-5.82 3.32l-.2 2.69l2.7-.19z");
}

.x2ixl2b_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.07 32.04h39.86");
}
</style><path class="ncscgwo0x"/><circle class="cpk0fnbgt"/><path class="x2ixl2b_h"/>`,
		"fallback": "arcticons:gasflow",
	});
}

export default Component;
