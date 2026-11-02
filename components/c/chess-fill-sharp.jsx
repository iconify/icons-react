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
		"content": `<style>.ojvtfuboh {
  fill: currentColor;
  d: path("M8.613 12H7a1 1 0 0 1-.894-.553l-1-2A1 1 0 0 1 5.4 8.2l3.423-2.568l-.772-2.316a1.001 1.001 0 0 1 1.265-1.265l3 1c1.666.556 2.921 1.688 3.703 3.252C16.744 7.753 17 9.391 17 11v5H7.279ZM19 18v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3Z");
}
</style><path class="ojvtfuboh"/>`,
		"fallback": "coolicons:chess-fill-sharp",
	});
}

export default Component;
