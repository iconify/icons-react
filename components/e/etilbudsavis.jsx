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
		"content": `<style>.msq77_bsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.126 31.97a6.66 6.66 0 0 1-5.793 3.363h-6.666A6.667 6.667 0 0 1 14 28.667v-4.334a6.667 6.667 0 0 1 6.667-6.666h6.666A6.667 6.667 0 0 1 34 24.333V26.5H14");
}

.z26quccma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.5 10.5h-32v27a5 5 0 0 0 5 5h27a5 5 0 0 0 5-5v-22a5 5 0 0 0-5-5m-32 0l27-5v5");
}
</style><path class="z26quccma"/><path class="msq77_bsh"/>`,
		"fallback": "arcticons:etilbudsavis",
	});
}

export default Component;
