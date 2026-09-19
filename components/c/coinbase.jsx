import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ygzs3jj8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5A21.5 21.5 0 1 1 39.21 8.81L32 16.05A11.25 11.25 0 1 0 32 32h0l7.24 7.24A21.43 21.43 0 0 1 24 45.5");
}
</style><path class="ygzs3jj8s"/>`,
		"fallback": "arcticons:coinbase",
	});
}

export default Component;
