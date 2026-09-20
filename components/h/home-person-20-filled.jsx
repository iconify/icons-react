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
		"content": `<style>.sse85nakp {
  fill: currentColor;
  d: path("M16.5 14a1.5 1.5 0 0 1 1.5 1.5c0 1.245-1 2.5-3.5 2.5S11 16.75 11 15.5a1.5 1.5 0 0 1 1.5-1.5zM8.996 2.385a1.5 1.5 0 0 1 2.008 0l5.5 4.95A1.5 1.5 0 0 1 17 8.45v.893a3 3 0 1 0-4.727 3.667A2.5 2.5 0 0 0 10 15.5c0 .514.12 1.031.37 1.505H4.5a1.5 1.5 0 0 1-1.5-1.5V8.45c0-.425.18-.83.496-1.114zM14.5 9a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="sse85nakp"/>`,
		"fallback": "fluent:home-person-20-filled",
	});
}

export default Component;
