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
		"content": `<style>.w5qe4hb9p {
  fill: currentColor;
  d: path("M15.117 9a4.25 4.25 0 0 0-3.813 2.373L6.155 21.83a6.7 6.7 0 0 1 2.095-.33h31.5c.731 0 1.435.116 2.095.331l-5.149-10.458A4.25 4.25 0 0 0 32.883 9zM4 28.25v6.5A4.25 4.25 0 0 0 8.25 39h31.5A4.25 4.25 0 0 0 44 34.75v-6.5A4.25 4.25 0 0 0 39.75 24H8.25A4.25 4.25 0 0 0 4 28.25m34.5 3.25a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><path class="w5qe4hb9p"/>`,
		"fallback": "fluent:hard-drive-48-filled",
	});
}

export default Component;
