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
		"content": `<style>.esc8_q6yg {
  fill: currentColor;
  d: path("M7 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0m6 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8");
}
</style><path class="esc8_q6yg"/>`,
		"fallback": "fluent:grid-circles-24-filled",
	});
}

export default Component;
