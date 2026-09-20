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
		"content": `<style>.nwc6tdbke {
  fill: currentColor;
  d: path("M6.862 6.5H9.25a.75.75 0 0 1 0 1.5h-4.4A.85.85 0 0 1 4 7.15v-4.4a.75.75 0 0 1 1.5 0v2.947l3.059-2.66a5.25 5.25 0 0 1 6.888 7.925l-8.172 7.104a.75.75 0 1 1-.984-1.132l8.172-7.104a3.75 3.75 0 1 0-4.92-5.66z");
}
</style><path class="nwc6tdbke"/>`,
		"fallback": "fluent:arrow-undo-20-filled",
	});
}

export default Component;
