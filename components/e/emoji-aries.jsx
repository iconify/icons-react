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

.ww6djqbuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.5 33.398c2.38-12.611 4.885-20.296 8.973-19.796c2.012.452 2.86 2.782 1.988 4.484M24.5 33.398c-2.38-12.611-4.885-20.296-8.972-19.796c-2.013.452-2.861 2.782-1.99 4.484");
}
</style><path class="ww6djqbuf"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:emoji-aries",
	});
}

export default Component;
