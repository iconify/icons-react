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
		"content": `<style>.ea4uzpzwp {
  fill: currentColor;
  d: path("m21.414 12l7.293-7.293a1 1 0 0 0-1.414-1.414L20 10.586V4a1 1 0 1 0-2 0v9a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2zM7.5 5A2.5 2.5 0 0 0 5 7.5V16h7.23A3.77 3.77 0 0 1 16 19.77V27h8.5a2.5 2.5 0 0 0 2.5-2.5V19a1 1 0 1 1 2 0v5.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3H13a1 1 0 1 1 0 2z");
}
</style><path class="ea4uzpzwp"/>`,
		"fallback": "fluent:contract-down-left-32-filled",
	});
}

export default Component;
