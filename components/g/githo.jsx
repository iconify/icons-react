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
		"content": `<style>.l5fmf7b_i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24a21.478 21.478 0 1 0-1.01 6.529");
}

.z78mcuald {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.453 32.444l5.038-1.915l1.915 5.037");
}
</style><path class="l5fmf7b_i"/><path class="z78mcuald"/>`,
		"fallback": "arcticons:githo",
	});
}

export default Component;
