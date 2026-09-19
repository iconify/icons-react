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

.w983fjb5a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.463 9.5h14.968v13.097H16.463zm0 15.903h14.968V38.5H16.463zm18.242-7.484h3.742v3.742h-3.742zm0-7.484h3.742v3.742h-3.742zm0 15.904h3.742v3.742h-3.742zm0 7.484h3.742v3.742h-3.742zM9.553 17.919h3.742v3.742H9.553zm0-7.484h3.742v3.742H9.553zm0 15.904h3.742v3.742H9.553zm0 7.484h3.742v3.742H9.553z");
}
</style><path class="w983fjb5a"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:ds-video",
	});
}

export default Component;
