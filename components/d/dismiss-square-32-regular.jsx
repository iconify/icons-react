import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yib0cnbbx {
  fill: currentColor;
  d: path("M24.5 3A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3zm-17 2A2.5 2.5 0 0 0 5 7.5v17A2.5 2.5 0 0 0 7.5 27h17a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 24.5 5zm12.793 5.293a1 1 0 1 1 1.414 1.414L17.414 16l4.293 4.293a1 1 0 1 1-1.414 1.414L16 17.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L14.586 16l-4.293-4.293a1 1 0 1 1 1.414-1.414L16 14.586z");
}
</style><path class="yib0cnbbx"/>`,
		"fallback": "fluent:dismiss-square-32-regular",
	});
}

export default Component;
