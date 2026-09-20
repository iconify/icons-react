import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u74ajogqn {
  fill: currentColor;
  d: path("M4 10a6 6 0 0 1 9.969-4.5H12.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.16a7.5 7.5 0 1 0 2.495 5.313a.75.75 0 0 0-1.5.054q.006.11.005.223a6 6 0 0 1-12 0");
}
</style><path class="u74ajogqn"/>`,
		"fallback": "fluent:arrow-clockwise-20-filled",
	});
}

export default Component;
