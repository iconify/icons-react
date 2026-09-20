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
		"content": `<style>.u0k3ghl4i {
  fill: currentColor;
  d: path("M13.895 2.777a3.25 3.25 0 0 1 4.21 0l9.75 8.287A3.25 3.25 0 0 1 29 13.54V26.5a2.5 2.5 0 0 1-2.5 2.5h-4a2.5 2.5 0 0 1-2.5-2.5V20a2 2 0 0 0-1.991-2H13.99A2 2 0 0 0 12 20v6.5A2.5 2.5 0 0 1 9.5 29h-4A2.5 2.5 0 0 1 3 26.5V13.54a3.25 3.25 0 0 1 1.145-2.476z");
}
</style><path class="u0k3ghl4i"/>`,
		"fallback": "fluent:home-32-filled",
	});
}

export default Component;
