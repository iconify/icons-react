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

.kz80u063p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.916 27.838h-6.563c-3.798 0-4.794-1.956-4.794-5.798h11.358z");
}

.x7n_e7oco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.501 35.59V12.132H35.5v5.782H18.559v17.954H12.5z");
}
</style><path class="i9clfwm2k"/><path class="x7n_e7oco"/><path class="kz80u063p"/>`,
		"fallback": "arcticons:frontwave",
	});
}

export default Component;
