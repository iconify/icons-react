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
		"content": `<style>.aw1ykdq9h {
  fill: currentColor;
  d: path("M242.09 41.5A12 12 0 0 0 232 36h-80a12 12 0 0 0-10.92 7l-7.72 17H28a12 12 0 0 0-8.88 20.07L51.78 116l-32.66 35.93A12 12 0 0 0 28 172h73.09a12 12 0 0 0 10.91-7l7.71-17h53.63l-32.28 71a12 12 0 1 0 21.86 10l80-176a12 12 0 0 0-.83-11.5M55.13 148l21.75-23.93a12 12 0 0 0 0-16.14L55.13 84h67.32l-29.09 64Zm129.14-24h-53.63l29.09-64h53.63Z");
}
</style><path class="aw1ykdq9h"/>`,
		"fallback": "ph:flag-banner-fold-bold",
	});
}

export default Component;
