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
		"content": `<style>.y2sykj1-u {
  fill: currentColor;
  d: path("m202.83 178.83l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L148 214.34V128a92.1 92.1 0 0 0-92-92a4 4 0 0 1 0-8a100.11 100.11 0 0 1 100 100v86.34l41.17-41.17a4 4 0 0 1 5.66 5.66");
}
</style><path class="y2sykj1-u"/>`,
		"fallback": "ph:arrow-bend-right-down-thin",
	});
}

export default Component;
