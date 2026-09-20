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
		"content": `<style>.e2nbyvb0d {
  fill: currentColor;
  d: path("M10.5 10h-3A2.5 2.5 0 0 0 5 12.5v12A2.5 2.5 0 0 0 7.5 27h8a2.5 2.5 0 0 0 2.29-1.5h2.097A4.5 4.5 0 0 1 15.5 29h-8A4.5 4.5 0 0 1 3 24.5v-12A4.5 4.5 0 0 1 7.5 8h3zm14-7A4.5 4.5 0 0 1 29 7.5v12a4.5 4.5 0 0 1-4.5 4.5h-8a4.5 4.5 0 0 1-4.5-4.5v-12A4.5 4.5 0 0 1 16.5 3zm-8 2A2.5 2.5 0 0 0 14 7.5v12a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 24.5 5z");
}
</style><path class="e2nbyvb0d"/>`,
		"fallback": "fluent:copy-32-regular",
	});
}

export default Component;
