import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ap-jsrowt {
  fill: currentColor;
  d: path("M5 2a.5.5 0 0 0 0 1h1v1h-.5A1.5 1.5 0 0 0 4 5.5v7A1.5 1.5 0 0 0 5.5 14H6v1H5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H7v-1h.5A1.5 1.5 0 0 0 9 12.5v-7A1.5 1.5 0 0 0 7.5 4H7V3h1a.5.5 0 0 0 0-1zm0 10.5V11h3v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5m0-7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V10H5zM12 4a.5.5 0 0 0 0 1h1v1h-.5A1.5 1.5 0 0 0 11 7.5v7a1.5 1.5 0 0 0 1.5 1.5h.5v1h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1v-1h.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 14.5 6H14V5h1a.5.5 0 0 0 0-1zm3 5h-3V7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5zm-3 1h3v4.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z");
}
</style><path class="ap-jsrowt"/>`,
		"fallback": "fluent:data-whisker-20-regular",
	});
}

export default Component;
