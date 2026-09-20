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
		"content": `<style>.lfp4d60bf {
  fill: currentColor;
  d: path("M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m72 176H96a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m40-128v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z");
}
</style><path class="lfp4d60bf"/>`,
		"fallback": "ph:battery-vertical-low-fill",
	});
}

export default Component;
