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
		"content": `<style>.t4hc-iuge {
  fill: currentColor;
  d: path("M208 20H72a36 36 0 0 0-36 36v168a12 12 0 0 0 12 12h144a12 12 0 0 0 0-24H60v-4a12 12 0 0 1 12-12h136a12 12 0 0 0 12-12V32a12 12 0 0 0-12-12m-12 152H72a35.6 35.6 0 0 0-12 2.06V56a12 12 0 0 1 12-12h124Z");
}
</style><path class="t4hc-iuge"/>`,
		"fallback": "ph:book-bold",
	});
}

export default Component;
