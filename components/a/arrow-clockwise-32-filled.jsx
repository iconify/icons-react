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
		"content": `<style>.r80_hw12x {
  fill: currentColor;
  d: path("M5.5 16c0-5.799 4.701-10.5 10.5-10.5c2.594 0 4.968.94 6.801 2.5H20.75a1.25 1.25 0 1 0 0 2.5h5c.69 0 1.25-.56 1.25-1.25v-5a1.25 1.25 0 1 0-2.5 0v1.914A12.95 12.95 0 0 0 16 3C8.82 3 3 8.82 3 16s5.82 13 13 13s13-5.82 13-13q0-.419-.026-.831a1.25 1.25 0 1 0-2.495.157q.021.335.021.674c0 5.799-4.701 10.5-10.5 10.5S5.5 21.799 5.5 16");
}
</style><path class="r80_hw12x"/>`,
		"fallback": "fluent:arrow-clockwise-32-filled",
	});
}

export default Component;
