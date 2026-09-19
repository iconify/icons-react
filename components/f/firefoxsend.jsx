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
		"content": `<style>.e--hdhb9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24.17a18.5 18.5 0 0 0-37 0Zm-18.5 0v18.16m0 0l8.84-8.84m-17.68 0L24 42.33");
}
</style><path class="e--hdhb9o"/>`,
		"fallback": "arcticons:firefoxsend",
	});
}

export default Component;
