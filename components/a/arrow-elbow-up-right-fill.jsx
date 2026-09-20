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
		"content": `<style>.c7g64ob4p {
  fill: currentColor;
  d: path("m221.66 85.66l-48 48A8 8 0 0 1 160 128V88H80v136a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h88V32a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32");
}
</style><path class="c7g64ob4p"/>`,
		"fallback": "ph:arrow-elbow-up-right-fill",
	});
}

export default Component;
