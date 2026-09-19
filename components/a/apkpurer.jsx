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
		"content": `<style>.c2xrbabwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z");
}

.rv-0wzb8x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.065 23.92h6.087m1.565 4.696l-4.522-13.912L9.5 28.616m12.272-9.232v13.912m11.685-9.549l5.043 4.87m-6.956-2.957l6.26-6.26m-16.031 5.732a3.49 3.49 0 0 0 3.477 3.484h0a3.49 3.49 0 0 0 3.478-3.484v-2.264a3.49 3.49 0 0 0-3.478-3.483h0a3.49 3.49 0 0 0-3.477 3.483m9.771-8.164v13.912");
}
</style><path class="rv-0wzb8x"/><path class="c2xrbabwq"/>`,
		"fallback": "arcticons:apkpurer",
	});
}

export default Component;
