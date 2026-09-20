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
		"content": `<style>.d4uzncd9x {
  fill: currentColor;
  d: path("M24.75 2A3.25 3.25 0 0 1 28 5.25v21.5A3.25 3.25 0 0 1 24.75 30H7.25a3.25 3.25 0 0 1-3.246-3.083L4 26.75V5.25A3.25 3.25 0 0 1 7.25 2zM7.25 4C6.56 4 6 4.56 6 5.25v21.5l.007.128A1.25 1.25 0 0 0 7.25 28h17.5c.69 0 1.25-.56 1.25-1.25V5.25C26 4.56 25.44 4 24.75 4zM22 22a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2z");
}
</style><path class="d4uzncd9x"/>`,
		"fallback": "fluent:document-one-page-32-regular",
	});
}

export default Component;
