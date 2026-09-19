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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.y4xp19s8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.669 17.22v13.56h6.781m2.27-13.56h6.78M30.72 24h4.407m-4.407-6.78v13.56m-20.22-.04l4.405-13.52m4.409 13.56l-4.409-13.56m2.935 9.024h-5.875");
}
</style><path class="i9clfwm2k"/><path class="y4xp19s8y"/>`,
		"fallback": "arcticons:alfia",
	});
}

export default Component;
