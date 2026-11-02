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
		"content": `<style>.s4ktjyyzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 12v-2a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1V5c0-.369-.631-.369-1 0l-6 6a1.414 1.414 0 0 0 0 2l6 6c.369.369 1 .369 1 0v-3a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1z");
}
</style><path class="s4ktjyyzz"/>`,
		"fallback": "coolicons:arrow-big-left",
	});
}

export default Component;
