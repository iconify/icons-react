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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.m0ltc1ukh {
  d: path("M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm2.502 5.5H5.5a.5.5 0 0 0 0 1h5.002a.5.5 0 1 0 0-1z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="m0ltc1ukh"/></g>`,
		"fallback": "fluent:block-16-filled",
	});
}

export default Component;
