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
		"content": `<style>.t-eqanbsg {
  fill: currentColor;
  d: path("M3.5 12a8.5 8.5 0 0 1 17 0zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2");
}
</style><path class="t-eqanbsg"/>`,
		"fallback": "fluent:circle-half-fill-24-regular",
	});
}

export default Component;
