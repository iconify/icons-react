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
		"content": `<style>.bwq6u9mgy {
  fill: currentColor;
  d: path("M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v148h180a12 12 0 0 1 12 12m-120-60a16 16 0 1 0 16-16a16 16 0 0 0-16 16m-8-40a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-32 72a16 16 0 1 0-16-16a16 16 0 0 0 16 16m96-48a16 16 0 1 0-16-16a16 16 0 0 0 16 16m24-40a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-24 72a16 16 0 1 0 16-16a16 16 0 0 0-16 16");
}
</style><path class="bwq6u9mgy"/>`,
		"fallback": "ph:chart-scatter-bold",
	});
}

export default Component;
