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
		"content": `<style>.q3ht4g0xr {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m48.49-76.49a12 12 0 0 1-17 17L128 121l-31.51 31.49a12 12 0 0 1-17-17l40-40a12 12 0 0 1 17 0Z");
}
</style><path class="q3ht4g0xr"/>`,
		"fallback": "ph:caret-circle-up-bold",
	});
}

export default Component;
