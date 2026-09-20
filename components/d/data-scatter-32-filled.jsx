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
		"content": `<style>.cfk4h3bvb {
  fill: currentColor;
  d: path("M4.25 3c.69 0 1.25.56 1.25 1.25v20.5c0 .966.784 1.75 1.75 1.75h20.5a1.25 1.25 0 1 1 0 2.5H7.25A4.25 4.25 0 0 1 3 24.75V4.25C3 3.56 3.56 3 4.25 3M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m7 1a4 4 0 1 1 8 0a4 4 0 0 1-8 0m1 7a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="cfk4h3bvb"/>`,
		"fallback": "fluent:data-scatter-32-filled",
	});
}

export default Component;
