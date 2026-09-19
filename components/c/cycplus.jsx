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
		"content": `<style>.ea88_ab8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.795 32.364a6.396 6.396 0 1 1 1.03-6.507m26.675.742a9.84 9.84 0 1 1 0-2.739m-27.705 8.504l8.686-10.418");
}

.m5ijvcrkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.74 12.931H13.276c8.388.793 10.4 4.99 10.623 9.713m8.657 2.586h2.306m-1.153-1.242v2.483");
}
</style><path class="ea88_ab8o"/><path class="m5ijvcrkq"/>`,
		"fallback": "arcticons:cycplus",
	});
}

export default Component;
