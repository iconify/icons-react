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
		"content": `<style>.b7czjac0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.076 28.789h12.937M43.5 38.74h-2.138a1.46 1.46 0 0 1-1.384-1L30.545 9.26L20.78 38.74m1.625-29.479L12.64 38.739m1.625-29.478L4.5 38.739");
}
</style><path class="b7czjac0m"/>`,
		"fallback": "arcticons:abanca",
	});
}

export default Component;
