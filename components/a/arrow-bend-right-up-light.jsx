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
		"content": `<style>.smwwt6buy {
  fill: currentColor;
  d: path("M204.24 84.24a6 6 0 0 1-8.48 0L158 46.49V128A102.12 102.12 0 0 1 56 230a6 6 0 0 1 0-12a90.1 90.1 0 0 0 90-90V46.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 0 1 0 8.48");
}
</style><path class="smwwt6buy"/>`,
		"fallback": "ph:arrow-bend-right-up-light",
	});
}

export default Component;
