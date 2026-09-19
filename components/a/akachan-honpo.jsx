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
		"content": `<style>.cwd-q1ibg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.085 24.404c0-2.711 2.2-4.91 4.915-4.91a4.91 4.91 0 0 1 4.914 4.91v8.1m-15.75-4.908c0 2.711-2.2 4.91-4.915 4.91a4.91 4.91 0 0 1-4.914-4.91v-3.191c0-2.711 2.2-4.91 4.914-4.91a4.91 4.91 0 0 1 4.915 4.91m0 8.1v-13.01");
}

.i0z79mbiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 10.5a13.5 13.5 0 0 0-10.193 4.65A11.5 11.5 0 0 0 16 14.5A11.5 11.5 0 0 0 4.5 26A11.5 11.5 0 0 0 16 37.5a11.5 11.5 0 0 0 6.67-2.166A13.5 13.5 0 0 0 30 37.5A13.5 13.5 0 0 0 43.5 24A13.5 13.5 0 0 0 30 10.5m-3.915 2.367v19.638");
}
</style><path class="i0z79mbiv"/><path class="cwd-q1ibg"/>`,
		"fallback": "arcticons:akachan-honpo",
	});
}

export default Component;
