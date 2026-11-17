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
		"content": `<style>.i6d_u9b2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 4c-3 0-3 0-4 4l-2 8c-1 4-1 4-4 4m2-10h7m2 4h7m-4-3l-3 3l3 3");
}
</style><path class="i6d_u9b2e"/>`,
		"fallback": "coolicons:function-arrow-left-round",
	});
}

export default Component;
