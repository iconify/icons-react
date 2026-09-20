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
		"content": `<style>.h3nmj145b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.35 14.63q-2-.31-7.52 2.86q5.91-.28 7.6.44m-.02 4.39c-5.54-2.28-10.59-2.4-14.37-1.61l-4.99 2.79c10.26-.82 13.04 2.82 19.39 3.15m.03 3.16c-10.83 1.48-16.45-4.63-26.73-2.96l-5.39 2.85c12.55-1.18 16.86 6.94 32.13 1.98");
}

.xadce_bny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 5.5h28a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-28a5 5 0 0 1 5-5");
}
</style><path class="xadce_bny"/><path class="h3nmj145b"/>`,
		"fallback": "arcticons:empower-ret",
	});
}

export default Component;
