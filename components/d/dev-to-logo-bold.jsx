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
		"content": `<style>.qxl--5bcd {
  fill: currentColor;
  d: path("M232 52H24A20 20 0 0 0 4 72v112a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20m-4 128H28V76h200Zm-120-24v-56a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-8v4a12 12 0 0 1 0 24v4h8a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12m52.46-52.7a12 12 0 1 1 23.08-6.6l4.46 15.62l4.46-15.62a12 12 0 0 1 23.08 6.6l-16 56a12 12 0 0 1-23.08 0ZM52 168h12a36 36 0 0 0 36-36v-8a36 36 0 0 0-36-36H52a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12m12-56a12 12 0 0 1 12 12v8a12 12 0 0 1-12 12Z");
}
</style><path class="qxl--5bcd"/>`,
		"fallback": "ph:dev-to-logo-bold",
	});
}

export default Component;
