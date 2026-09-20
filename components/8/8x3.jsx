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

.p273s5bii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.5 18.763c.553.463 1.15.675 2.488.675h.313a2 2 0 1 0 0-3.999");
}

.wnuxahmaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.5 12.106c.554-.461 1.15-.672 2.49-.668l.31.002a2 2 0 1 1 0 3.999m-1.536 0H14.3M33.2 32.5a2 2 0 1 0 0 4h1.3a2 2 0 1 0 0-4m0 0a2 2 0 1 0 0-4h-1.3a2 2 0 1 0 0 4m0 0h1.3");
}
</style><path class="i9clfwm2k"/><path class="p273s5bii"/><path class="wnuxahmaw"/>`,
		"fallback": "arcticons:8x3",
	});
}

export default Component;
