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
		"content": `<style>.p_u1znbdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 19H5c-.369 0-.369-.631 0-1l5-5a1.414 1.414 0 0 0 0-2L5 6c-.369-.369-.369-1 0-1h8l6 6a1.414 1.414 0 0 1 0 2l-6 6z");
}
</style><path class="p_u1znbdx"/>`,
		"fallback": "coolicons:arrow-badge-right",
	});
}

export default Component;
