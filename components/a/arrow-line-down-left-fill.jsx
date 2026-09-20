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
		"content": `<style>.pvfzhhbsq {
  fill: currentColor;
  d: path("M189.66 90.34a8 8 0 0 1 0 11.32L131.31 160l42.35 42.34A8 8 0 0 1 168 216H72a8 8 0 0 1-8-8v-96a8 8 0 0 1 13.66-5.66L120 148.69l58.34-58.35a8 8 0 0 1 11.32 0M224 40H48a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16");
}
</style><path class="pvfzhhbsq"/>`,
		"fallback": "ph:arrow-line-down-left-fill",
	});
}

export default Component;
