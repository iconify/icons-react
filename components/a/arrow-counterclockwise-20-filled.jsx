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
		"content": `<style>.ig6fbytbj {
  fill: currentColor;
  d: path("M16 10a6 6 0 0 0-9.969-4.5H7.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.16a7.5 7.5 0 1 1-2.495 5.313a.75.75 0 1 1 1.5.054A6 6 0 1 0 16 10");
}
</style><path class="ig6fbytbj"/>`,
		"fallback": "fluent:arrow-counterclockwise-20-filled",
	});
}

export default Component;
