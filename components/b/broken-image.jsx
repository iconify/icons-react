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
		"content": `<style>.q9ysc6weg {
  fill: currentColor;
  d: path("M21 5v6.59l-3-3.01l-4 4.01l-4-4l-4 4l-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99l4-4l4 4z");
}
</style><path class="q9ysc6weg"/>`,
		"fallback": "ic:broken-image",
	});
}

export default Component;
