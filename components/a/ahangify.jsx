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
		"content": `<style>.mdxt7wb_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.202 8.797A21.499 21.499 0 1 1 2.915 19.805A21.5 21.5 0 0 1 24.002 2.5");
}

.ucajbpihm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.733 23.999V2.827a21.5 21.5 0 0 1 8.599 3.561");
}

.zbg1897sa {
  cx: 24px;
  cy: 23.999px;
  r: 3.733px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="mdxt7wb_w"/><path class="ucajbpihm"/><circle class="zbg1897sa"/>`,
		"fallback": "arcticons:ahangify",
	});
}

export default Component;
