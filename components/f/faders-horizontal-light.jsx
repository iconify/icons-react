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
		"content": `<style>.j5jmpeb-o {
  fill: currentColor;
  d: path("M178 80a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6M40 86h106v18a6 6 0 0 0 12 0V56a6 6 0 0 0-12 0v18H40a6 6 0 0 0 0 12m176 84h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12M88 146a6 6 0 0 0-6 6v18H40a6 6 0 0 0 0 12h42v18a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6");
}
</style><path class="j5jmpeb-o"/>`,
		"fallback": "ph:faders-horizontal-light",
	});
}

export default Component;
