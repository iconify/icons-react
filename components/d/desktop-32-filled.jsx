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
		"content": `<style>.b52tj0bma {
  fill: currentColor;
  d: path("M2 6.25A3.25 3.25 0 0 1 5.25 3h21.5A3.25 3.25 0 0 1 30 6.25v15.5A3.25 3.25 0 0 1 26.75 25h-6.744v2.001h2.998a1 1 0 1 1 0 1.999H9.012a1 1 0 1 1 0-1.999h2.998V25H5.25A3.25 3.25 0 0 1 2 21.75zM14.01 25v2.001h3.996V25z");
}
</style><path class="b52tj0bma"/>`,
		"fallback": "fluent:desktop-32-filled",
	});
}

export default Component;
