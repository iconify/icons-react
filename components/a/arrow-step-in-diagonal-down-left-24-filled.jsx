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
		"content": `<style>.mnntot7qu {
  fill: currentColor;
  d: path("M19.78 4.28a.75.75 0 0 0-1.06-1.06l-8.22 8.22V5.75a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-5.69zM9 18a3 3 0 1 1-6 0a3 3 0 0 1 6 0");
}
</style><path class="mnntot7qu"/>`,
		"fallback": "fluent:arrow-step-in-diagonal-down-left-24-filled",
	});
}

export default Component;
