import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vx6oiqgst {
  fill: currentColor;
  d: path("M204.24 139.76a6 6 0 1 1-8.48 8.48L134 86.49V224a6 6 0 0 1-12 0V86.49l-61.76 61.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0ZM216 34H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12");
}
</style><path class="vx6oiqgst"/>`,
		"fallback": "ph:arrow-line-up-light",
	});
}

export default Component;
