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
		"content": `<style>.c3tgwcclh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.38 27.25v-6.5M20.75 4.5h6.5M13.64 8.82h20.72v30.36H13.64zm24.98 11.93v6.5M15.68 43.5h-2.3a4 4 0 0 1-4-4v-2.31m29.24 0v2.31a4 4 0 0 1-4 4h-2.3M9.38 10.81V8.5a4 4 0 0 1 4-4h2.3m16.64 0h2.3a4 4 0 0 1 4 4v2.31M27.25 43.5h-6.5M17 14.79h14m-14 6.29h10.5M17 27.37h14m-14 6.28h10.5");
}
</style><path class="c3tgwcclh"/>`,
		"fallback": "arcticons:clearscan",
	});
}

export default Component;
