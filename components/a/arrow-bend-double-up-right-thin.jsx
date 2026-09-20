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
		"content": `<style>.l9pfxsbjc {
  fill: currentColor;
  d: path("m226.83 106.83l-48 48a4 4 0 0 1-5.66-5.66L218.34 104l-45.17-45.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66m-48-5.66l-48-48a4 4 0 1 0-5.66 5.66L166.34 100H128A100.11 100.11 0 0 0 28 200a4 4 0 0 0 8 0a92.1 92.1 0 0 1 92-92h38.34l-41.17 41.17a4 4 0 0 0 5.66 5.66l48-48a4 4 0 0 0 0-5.66");
}
</style><path class="l9pfxsbjc"/>`,
		"fallback": "ph:arrow-bend-double-up-right-thin",
	});
}

export default Component;
