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
		"content": `<style>.zy610kn7a {
  fill: currentColor;
  d: path("M12 7a2 2 0 0 1 1.997-2h.006A2 2 0 0 1 16 7v5h1V9a1.999 1.999 0 0 1 3.001-1.732C20.619 7.626 21 8.285 21 9v6a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7v-3a3 3 0 0 1 3-3v6h1V9a1.999 1.999 0 0 1 3.001-1.732C10.619 7.626 11 8.285 11 9v3h1Z");
}
</style><path class="zy610kn7a"/>`,
		"fallback": "coolicons:hand-grab-fill",
	});
}

export default Component;
