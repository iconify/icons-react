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
		"content": `<style>.mmg8iphml {
  fill: currentColor;
  d: path("M6.5 8A4.5 4.5 0 0 0 2 12.5v7A4.5 4.5 0 0 0 6.5 24h17a4.5 4.5 0 0 0 4.5-4.5V19h.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H28v-.5A4.5 4.5 0 0 0 23.5 8z");
}
</style><path class="mmg8iphml"/>`,
		"fallback": "fluent:battery-0-32-filled",
	});
}

export default Component;
