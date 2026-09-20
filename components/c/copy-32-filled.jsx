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
		"content": `<style>.e2o4n2bxn {
  fill: currentColor;
  d: path("M10.5 19.5a6 6 0 0 0 6 6h3.387A4.5 4.5 0 0 1 15.5 29h-8A4.5 4.5 0 0 1 3 24.5v-12A4.5 4.5 0 0 1 7.5 8h3zM24.5 3A4.5 4.5 0 0 1 29 7.5v12a4.5 4.5 0 0 1-4.5 4.5h-8a4.5 4.5 0 0 1-4.5-4.5v-12A4.5 4.5 0 0 1 16.5 3z");
}
</style><path class="e2o4n2bxn"/>`,
		"fallback": "fluent:copy-32-filled",
	});
}

export default Component;
