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

.p42hyfn2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.28 28.458v-5.551a3.364 3.364 0 0 0-3.365-3.365h0a3.364 3.364 0 0 0-3.364 3.364m0 5.552v-8.916m10.077 5.552a3.364 3.364 0 0 0 3.365 3.364h0a3.364 3.364 0 0 0 3.364-3.364v-2.187a3.364 3.364 0 0 0-3.364-3.365h0a3.364 3.364 0 0 0-3.365 3.365m0-3.365V33m-15.991-4.542V17.355c0-1.3 1.055-2.355 2.355-2.355h0c1.16 0 1.883.343 2.38.985m-6.729 3.557h4.71");
}
</style><path class="i9clfwm2k"/><path class="p42hyfn2f"/>`,
		"fallback": "arcticons:ferns-n-petals",
	});
}

export default Component;
