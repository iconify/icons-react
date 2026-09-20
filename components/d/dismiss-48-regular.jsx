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
		"content": `<style>.a-q-spb7w {
  fill: currentColor;
  d: path("M8.384 6.616a1.25 1.25 0 1 0-1.768 1.768L22.232 24L6.616 39.616a1.25 1.25 0 0 0 1.768 1.768L24 25.768l15.615 15.615a1.25 1.25 0 1 0 1.768-1.768L25.768 24L41.383 8.384a1.25 1.25 0 1 0-1.767-1.767L24 22.232z");
}
</style><path class="a-q-spb7w"/>`,
		"fallback": "fluent:dismiss-48-regular",
	});
}

export default Component;
