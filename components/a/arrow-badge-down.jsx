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
		"content": `<style>.r5jb-gb-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 9V5c0-.369-.631-.369-1 0l-5 5a1.414 1.414 0 0 1-2 0L6 5c-.369-.369-1-.369-1 0v8l6 6a1.414 1.414 0 0 0 2 0l6-6z");
}
</style><path class="r5jb-gb-s"/>`,
		"fallback": "coolicons:arrow-badge-down",
	});
}

export default Component;
