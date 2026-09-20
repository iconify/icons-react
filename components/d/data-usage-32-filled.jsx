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
		"content": `<style>.erqxogqux {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zM23 10v12a1 1 0 1 1-2 0V10a1 1 0 1 1 2 0m-7 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m-5-3v9a1 1 0 1 1-2 0v-9a1 1 0 1 1 2 0");
}
</style><path class="erqxogqux"/>`,
		"fallback": "fluent:data-usage-32-filled",
	});
}

export default Component;
