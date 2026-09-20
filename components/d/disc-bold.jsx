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
		"content": `<style>.czrl5z9og {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m42.32 96a44 44 0 0 0-3.91-9.44l28.84-28.84A83.55 83.55 0 0 1 211.13 116ZM148 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-20 84a84 84 0 1 1 50.28-151.25l-28.85 28.84A44 44 0 1 0 170.32 140h40.81A84.12 84.12 0 0 1 128 212");
}
</style><path class="czrl5z9og"/>`,
		"fallback": "ph:disc-bold",
	});
}

export default Component;
