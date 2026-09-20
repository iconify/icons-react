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
		"content": `<style>.k6mrunbln {
  fill: currentColor;
  d: path("M216 28h-44a12 12 0 0 0 0 24h15l-19 19l-15.51-15.48a12 12 0 0 0-17 17L151 88l-10.42 10.46a76 76 0 1 0 17 17L168 105l15.51 15.52a12 12 0 0 0 17-17L185 88l19-19v15a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12m-83.23 168.8A52 52 0 1 1 148 160a52.05 52.05 0 0 1-15.23 36.8");
}
</style><path class="k6mrunbln"/>`,
		"fallback": "ph:gender-transgender-bold",
	});
}

export default Component;
