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
		"content": `<style>.k9e_gab8z {
  fill: currentColor;
  d: path("M30 16a1 1 0 0 1-1 1h-2v3.5a3.5 3.5 0 0 1-3.5 3.5h-3a3.5 3.5 0 0 1-3.5-3.5V17h-2v6.5a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 5 23.5V17H3a1 1 0 1 1 0-2h2V8.5A3.5 3.5 0 0 1 8.5 5h3A3.5 3.5 0 0 1 15 8.5V15h2v-3.5A3.5 3.5 0 0 1 20.5 8h3a3.5 3.5 0 0 1 3.5 3.5V15h2a1 1 0 0 1 1 1");
}
</style><path class="k9e_gab8z"/>`,
		"fallback": "fluent:align-center-horizontal-32-filled",
	});
}

export default Component;
