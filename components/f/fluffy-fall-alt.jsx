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
		"content": `<style>.i8vvkrble {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.741 22.84c.477 2.209 1.685 2.962 3.259 2.962s2.782-.753 3.259-2.962m6.783-.642H44.5m-41 0h10.458");
}
</style><path class="i8vvkrble"/>`,
		"fallback": "arcticons:fluffy-fall-alt",
	});
}

export default Component;
