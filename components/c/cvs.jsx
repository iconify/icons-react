import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mtpr6f5tf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.139 15.225l-5.8-5.8a4.65 4.65 0 0 0-6.574 0L24 15.19l-5.765-5.765a4.65 4.65 0 0 0-6.573 0l-5.8 5.8a4.65 4.65 0 0 0 0 6.573l5.765 5.765L24 39.937l18.139-18.139a4.65 4.65 0 0 0 0-6.573");
}
</style><path class="mtpr6f5tf"/>`,
		"fallback": "arcticons:cvs",
	});
}

export default Component;
