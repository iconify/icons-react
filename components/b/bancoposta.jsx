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

.y2ncseb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.056 31.5v-15h4.91c2.777 0 5.027 2.255 5.027 5.038s-2.25 5.037-5.027 5.037h-4.91M18.194 24a3.75 3.75 0 1 1 0 7.5h-6.187v-15h6.187a3.75 3.75 0 1 1 0 7.5m0 0h-6.187");
}
</style><path class="i9clfwm2k"/><path class="y2ncseb9a"/>`,
		"fallback": "arcticons:bancoposta",
	});
}

export default Component;
