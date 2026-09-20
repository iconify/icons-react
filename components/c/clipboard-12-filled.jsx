import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kvg1vmb8p {
  fill: currentColor;
  d: path("M7.915 2H8.5A1.5 1.5 0 0 1 10 3.5v6A1.5 1.5 0 0 1 8.5 11h-5A1.5 1.5 0 0 1 2 9.5v-6A1.5 1.5 0 0 1 3.5 2h.585A1.5 1.5 0 0 1 5.5 1h1a1.5 1.5 0 0 1 1.415 1M5 2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5");
}
</style><path class="kvg1vmb8p"/>`,
		"fallback": "fluent:clipboard-12-filled",
	});
}

export default Component;
