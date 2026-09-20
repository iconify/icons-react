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
		"content": `<style>.xvjqbpb9y {
  fill: currentColor;
  d: path("M15.295 16.234a.75.75 0 0 1-1.09 1.032l-4.5-4.75a.75.75 0 0 1 0-1.032l4.5-4.75a.75.75 0 0 1 1.09 1.032l-3.301 3.484h9.256a.75.75 0 0 1 0 1.5h-9.256zM2 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><path class="xvjqbpb9y"/>`,
		"fallback": "fluent:arrow-step-in-left-24-filled",
	});
}

export default Component;
