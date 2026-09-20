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
		"content": `<style>.y15_2ccjd {
  fill: currentColor;
  d: path("M194.4 172.8L134.67 128l59.73-44.8a4 4 0 0 0 0-6.4l-64-48A4 4 0 0 0 124 32v88L66.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8l-59.73 44.8a4 4 0 0 0 4.8 6.4L124 136v88a4 4 0 0 0 6.4 3.2l64-48a4 4 0 0 0 0-6.4M132 40l53.33 40L132 120Zm0 176v-80l53.33 40Z");
}
</style><path class="y15_2ccjd"/>`,
		"fallback": "ph:bluetooth-thin",
	});
}

export default Component;
