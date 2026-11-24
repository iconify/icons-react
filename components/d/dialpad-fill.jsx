import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eqedirb-h {
  fill: currentColor;
  d: path("M6 3h.01a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2M6 8h.01a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2M6 13h.01a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2m-6 5h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><path class="eqedirb-h"/>`,
		"fallback": "coolicons:dialpad-fill",
	});
}

export default Component;
