import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g66g1hwda {
  fill: currentColor;
  d: path("M26 22a4 4 0 0 1-4 4h-3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5v-2c0-5.523-4.477-10-10-10S4 8.477 4 14v2h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-8C2 7.373 7.373 2 14 2s12 5.373 12 12z");
}
</style><path class="g66g1hwda"/>`,
		"fallback": "fluent:headphones-28-filled",
	});
}

export default Component;
