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
		"content": `<style>.oe5303d4d {
  fill: currentColor;
  d: path("M11 7v10a4 4 0 0 1-8 0V7a4 4 0 0 1 8 0m10 0v10a4 4 0 0 1-8 0V7a4 4 0 0 1 8 0");
}
</style><path class="oe5303d4d"/>`,
		"fallback": "coolicons:columns-fill-round",
	});
}

export default Component;
