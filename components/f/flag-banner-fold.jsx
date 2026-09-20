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
		"content": `<style>.so3isccet {
  fill: currentColor;
  d: path("M238.73 43.67A8 8 0 0 0 232 40h-80a8 8 0 0 0-7.28 4.69L135.94 64H28a8 8 0 0 0-5.92 13.38L57.19 116l-35.11 38.62A8 8 0 0 0 28 168h73.09a8 8 0 0 0 7.28-4.69l8.78-19.31h62.43l-34.86 76.69a8 8 0 1 0 14.56 6.62l80-176a8 8 0 0 0-.55-7.64M95.94 152H46.08l27.84-30.62a8 8 0 0 0 0-10.76L46.08 80h82.59Zm90.91-24h-62.43l32.73-72h62.43Z");
}
</style><path class="so3isccet"/>`,
		"fallback": "ph:flag-banner-fold",
	});
}

export default Component;
