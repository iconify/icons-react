import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q7x2riz_x {
  fill: currentColor;
  d: path("M8.687 1.262a1 1 0 0 0-1.374 0L2.469 5.84A1.5 1.5 0 0 0 2 6.931v5.57A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V6.93a1.5 1.5 0 0 0-.47-1.09z");
}
</style><path class="q7x2riz_x"/>`,
		"fallback": "fluent:home-empty-16-filled",
	});
}

export default Component;
