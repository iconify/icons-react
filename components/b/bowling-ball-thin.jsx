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
		"content": `<style>.qqmhlplsc {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m12-104a8 8 0 1 1-8-8a8 8 0 0 1 8 8m24-16a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 32a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="qqmhlplsc"/>`,
		"fallback": "ph:bowling-ball-thin",
	});
}

export default Component;
