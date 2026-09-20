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
		"content": `<style>.ynm8t-i7s {
  fill: currentColor;
  d: path("M176 92a35.8 35.8 0 0 1 19.38 5.47A16 16 0 0 0 220 84V48a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-36a16 16 0 0 0-24.6-13.48c-6.58 4.22-11.89 5.76-18.92 5.48H176a36 36 0 0 1 0-72m-.24 96a52.4 52.4 0 0 0 20.24-3v19H60V52h136v19.3a61.6 61.6 0 0 0-20-3.3a60 60 0 0 0-.24 120");
}
</style><path class="ynm8t-i7s"/>`,
		"fallback": "ph:coda-logo-bold",
	});
}

export default Component;
