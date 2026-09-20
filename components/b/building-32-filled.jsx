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
		"content": `<style>.f1imdfb0u {
  fill: currentColor;
  d: path("M4 5a3 3 0 0 1 3-3h11.75A3.25 3.25 0 0 1 22 5.25V13h2.75A3.25 3.25 0 0 1 28 16.25V29a1 1 0 0 1-1 1h-4v-4.5a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 9 25.5V30H5a1 1 0 0 1-1-1zm17 21v4h-4v-4zm-6 0v4h-4v-4zM12 8.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M10.5 20a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M17 8.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15.5 15a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="f1imdfb0u"/>`,
		"fallback": "fluent:building-32-filled",
	});
}

export default Component;
