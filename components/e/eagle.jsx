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
		"content": `<style>.fg32huyrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 6c2-2.3 4.8-3 7-3c3.5 0 6 2.5 6 6v11l-3-2l-2 3l-2-4l-3 3c0-2.5-.5-5-2-7H5c-.6 0-1 .4-1 1c-.7-.6-1-1.7-1-3c0-3 2-5 5-5m4 3h.01");
}
</style><path class="fg32huyrj"/>`,
		"fallback": "coolicons:eagle",
	});
}

export default Component;
