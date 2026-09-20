import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tixzpccws {
  fill: currentColor;
  d: path("M7.22 13.78a.75.75 0 0 0 1.06 0l2.75-2.75a.75.75 0 1 0-1.06-1.06L8.5 11.44V2.75a.75.75 0 0 0-1.5 0v8.69L5.53 9.97a.75.75 0 0 0-1.06 1.06z");
}
</style><path class="tixzpccws"/>`,
		"fallback": "fluent:arrow-sort-down-16-filled",
	});
}

export default Component;
