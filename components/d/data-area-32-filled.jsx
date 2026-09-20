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
		"content": `<style>.wz3tnhihf {
  fill: currentColor;
  d: path("M5.5 4.25a1.25 1.25 0 1 0-2.5 0v20.5A4.25 4.25 0 0 0 7.25 29h20.5a1.25 1.25 0 1 0 0-2.5H7.25a1.75 1.75 0 0 1-1.75-1.75zM7.25 25H26V9a1 1 0 0 0-1.6-.8l-7.506 5.63l-5.447-2.724a1 1 0 0 0-.84-.025L7 12.626V24.75c0 .138.112.25.25.25");
}
</style><path class="wz3tnhihf"/>`,
		"fallback": "fluent:data-area-32-filled",
	});
}

export default Component;
