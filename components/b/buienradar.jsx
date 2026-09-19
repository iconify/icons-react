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
		"content": `<style>.r1tvsoh9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.748 31.237A21.507 21.507 0 0 1 35.235 5.666m7.099 7.098a21.51 21.51 0 0 1-25.571 31.488M4.11 36.11a5.5 5.5 0 0 0 7.78 7.78L45.5 2.5Z");
}
</style><path class="r1tvsoh9u"/>`,
		"fallback": "arcticons:buienradar",
	});
}

export default Component;
