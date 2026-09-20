import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lybhn1bkd {
  fill: currentColor;
  d: path("M4.283 2.98a1.735 1.735 0 1 1 3.434 0l-.576 4.03a1.153 1.153 0 0 1-2.282 0zM7 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="lybhn1bkd"/>`,
		"fallback": "fluent:important-12-filled",
	});
}

export default Component;
