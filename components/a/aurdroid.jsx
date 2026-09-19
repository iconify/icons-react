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
		"content": `<style>.q738ueb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 34.21l-20.33 5.72V19.08l20.33-5.71zm-39 .76l18.67 4.96V19.08L4.5 14.12z");
}

.qvgrtccyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 14.12L24 8.07l19.5 5.3m-7.9 2.22v7.99l-5.08 1.56v-8.12m2.54-.72l-17.7-5.2");
}
</style><path class="q738ueb7x"/><path class="qvgrtccyt"/>`,
		"fallback": "arcticons:aurdroid",
	});
}

export default Component;
