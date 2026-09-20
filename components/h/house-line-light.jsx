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
		"content": `<style>.xux_wfb0a {
  fill: currentColor;
  d: path("M240 210h-18v-78.83l5.76 5.76a6 6 0 0 0 8.48-8.49L137.9 30.09a14 14 0 0 0-19.8 0l-98.34 98.35a6 6 0 0 0 8.48 8.49l5.76-5.76V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M46 119.17l80.58-80.59a2 2 0 0 1 2.84 0L210 119.17V210h-52v-58a6 6 0 0 0-6-6h-48a6 6 0 0 0-6 6v58H46ZM146 210h-36v-52h36Z");
}
</style><path class="xux_wfb0a"/>`,
		"fallback": "ph:house-line-light",
	});
}

export default Component;
