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
		"content": `<style>.x6suu7-jj {
  fill: currentColor;
  d: path("M160.49 136.49L145 152l15.52 15.51a12 12 0 0 1-17 17L128 169l-15.51 15.52a12 12 0 0 1-17-17L111 152l-15.49-15.51a12 12 0 1 1 17-17L128 135l15.51-15.52a12 12 0 1 1 17 17ZM228 48v160a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h20v-4a12 12 0 0 1 24 0v4h72v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20M52 52v24h152V52h-16a12 12 0 0 1-24 0H92a12 12 0 0 1-24 0Zm152 152V100H52v104Z");
}
</style><path class="x6suu7-jj"/>`,
		"fallback": "ph:calendar-x-bold",
	});
}

export default Component;
