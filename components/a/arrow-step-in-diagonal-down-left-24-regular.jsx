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
		"content": `<style>.dwkgy9bql {
  fill: currentColor;
  d: path("M19.78 4.28a.75.75 0 0 0-1.06-1.06l-8.22 8.22V5.75a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-5.69zM6 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3");
}
</style><path class="dwkgy9bql"/>`,
		"fallback": "fluent:arrow-step-in-diagonal-down-left-24-regular",
	});
}

export default Component;
