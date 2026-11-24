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
		"content": `<style>.kiplxqbvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17H7l-4 4V3h18v14zM9 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m4 2l2 2");
}
</style><path class="kiplxqbvh"/>`,
		"fallback": "coolicons:chat-search-sharp",
	});
}

export default Component;
