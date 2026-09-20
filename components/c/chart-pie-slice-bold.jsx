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
		"content": `<style>.zh2do116o {
  fill: currentColor;
  d: path("M93.82 116.64a12 12 0 0 0 6.18-10.49V40.74a12 12 0 0 0-17-10.91A108.26 108.26 0 0 0 20 128c0 3.37.16 6.76.47 10.1a12 12 0 0 0 17.76 9.38ZM76 62.06v37l-31.19 17.3A84.4 84.4 0 0 1 76 62.06M128 20a12 12 0 0 0-12 12v89.53l-76.82 44.74a12 12 0 0 0-4.3 16.46A108 108 0 1 0 128 20m0 192a84.47 84.47 0 0 1-65.57-31.5L134 138.79a12 12 0 0 0 6-10.37V44.85A84 84 0 0 1 128 212");
}
</style><path class="zh2do116o"/>`,
		"fallback": "ph:chart-pie-slice-bold",
	});
}

export default Component;
