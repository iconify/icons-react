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
		"content": `<style>.an91s8bdk {
  fill: currentColor;
  d: path("M9 13a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm0 2h3v8H9zm7-1a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zM7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zm0 24A2.5 2.5 0 0 1 5 24.5V11h22v13.5a2.5 2.5 0 0 1-2.5 2.5z");
}
</style><path class="an91s8bdk"/>`,
		"fallback": "fluent:app-generic-32-filled",
	});
}

export default Component;
