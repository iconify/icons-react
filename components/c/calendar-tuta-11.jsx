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
		"content": `<style>.vb-h2bbig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.965 22.78l4.205-1.98m0 0l-4.403 14.4m11.167-12.42l4.205-1.98m0 0l-4.402 14.4M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73");
}
</style><path class="vb-h2bbig"/>`,
		"fallback": "arcticons:calendar-tuta-11",
	});
}

export default Component;
