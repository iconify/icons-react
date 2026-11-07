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
		"content": `<style>.ygdyhpteb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 15v-2.5a1.5 1.5 0 0 1 1.256-1.48h.002l.004-.001A1.5 1.5 0 0 1 6 12.5V15a.5.5 0 0 0 1 0V9a1.999 1.999 0 0 1 3.001-1.732C10.619 7.626 11 8.285 11 9v3a.5.5 0 0 0 1 0V9a1.999 1.999 0 0 1 3-1.732c.619.357 1 1.017 1 1.732v3a.5.5 0 0 0 1 0V9a1.999 1.999 0 0 1 3-1.732c.619.357 1 1.017 1 1.732v6a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7");
}
</style><path class="ygdyhpteb"/>`,
		"fallback": "coolicons:hand-grab-bulk-round",
	});
}

export default Component;
