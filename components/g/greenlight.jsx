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

.xjhed3b3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.29 13.79v13.89a6.53 6.53 0 0 0 6.53 6.53h3.68M24.16 20.635c0-3.902-3.258-7.042-7.197-6.835c-3.694.194-6.463 3.516-6.463 7.222v6.343c0 3.78 3.058 6.845 6.83 6.845h0c3.772 0 6.83-3.065 6.83-6.845h-6.83");
}
</style><path class="i9clfwm2k"/><path class="xjhed3b3v"/>`,
		"fallback": "arcticons:greenlight",
	});
}

export default Component;
