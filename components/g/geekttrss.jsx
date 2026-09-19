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

.u7ealrjms {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.953 42.5c0-8.535-6.918-15.453-15.453-15.453M32.777 42.5c0-15.064-12.212-27.277-27.277-27.277m37 14.127A39.37 39.37 0 0 0 18.649 5.5");
}
</style><path class="u7ealrjms"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:geekttrss",
	});
}

export default Component;
