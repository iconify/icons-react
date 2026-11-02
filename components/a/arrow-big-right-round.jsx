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
		"content": `<style>.knu0x1b-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 12v-1a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2V6c0-.738.631-1.369 1-1l6 6a1.414 1.414 0 0 1 0 2l-6 6c-.369.369-1-.262-1-1v-1a2 2 0 0 0-2-2H6a2 2 0 0 1-2-2z");
}
</style><path class="knu0x1b-y"/>`,
		"fallback": "coolicons:arrow-big-right-round",
	});
}

export default Component;
