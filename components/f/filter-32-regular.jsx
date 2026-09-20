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
		"content": `<style>.qr9n71tzs {
  fill: currentColor;
  d: path("M3 9a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m4 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m5 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z");
}
</style><path class="qr9n71tzs"/>`,
		"fallback": "fluent:filter-32-regular",
	});
}

export default Component;
