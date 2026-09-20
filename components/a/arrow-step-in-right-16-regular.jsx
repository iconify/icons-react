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
		"content": `<style>.flxq52s0r {
  fill: currentColor;
  d: path("M8.293 8.5H1.5a.5.5 0 0 1 0-1h6.793L6.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708zM15 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-1 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="flxq52s0r"/>`,
		"fallback": "fluent:arrow-step-in-right-16-regular",
	});
}

export default Component;
