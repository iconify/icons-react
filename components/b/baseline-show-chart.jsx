import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kt7kgiy_n {
  fill: currentColor;
  d: path("m3.5 18.49l6-6.01l4 4L22 6.92l-1.41-1.41l-7.09 7.97l-4-4L2 16.99z");
}
</style><path class="kt7kgiy_n"/>`,
		"fallback": "ic:baseline-show-chart",
	});
}

export default Component;
