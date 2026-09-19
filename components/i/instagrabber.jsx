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
		"content": `<style>.d51z-jb4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 35.44a1.22 1.22 0 0 1-.966-.475l-7.554-9.847a1.217 1.217 0 0 1 .966-1.956h2.996l-6.632-8.645a1.217 1.217 0 0 1 .966-1.957h20.448a1.218 1.218 0 0 1 .967 1.957l-6.633 8.645h2.997a1.218 1.218 0 0 1 .965 1.957l-7.554 9.846c-.23.3-.587.475-.966.475");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="d51z-jb4w"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:instagrabber",
	});
}

export default Component;
