import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h5qf07t7j {
  fill: currentColor;
  d: path("M5 4h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-1.857L15 15H9l-2.143 5H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m.236 4.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M13 10a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="h5qf07t7j"/>`,
		"fallback": "coolicons:cassette-fill",
	});
}

export default Component;
