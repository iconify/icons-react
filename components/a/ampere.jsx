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
		"content": `<style>.bbt9vtb1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 0 0 5.74 35.35a4.94 4.94 0 0 0-1.29 3.31a4.88 4.88 0 0 0 8.19 3.6a21.51 21.51 0 0 0 29.62-29.62a4.89 4.89 0 0 0-6.91-6.9A21.47 21.47 0 0 0 24 2.5m-7.33 32.64l7.49-22.35m7.17 22.42l-7.17-22.42m4.77 14.92h-9.77");
}
</style><path class="bbt9vtb1m"/>`,
		"fallback": "arcticons:ampere",
	});
}

export default Component;
