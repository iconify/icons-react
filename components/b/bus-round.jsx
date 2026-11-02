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
		"content": `<style>.gjtxwrrza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 11v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4zM7 19h2v2H7Zm8 0h2v2h-2ZM5 13h14M9 6h6M8 16h.01M16 16h.01");
}
</style><path class="gjtxwrrza"/>`,
		"fallback": "coolicons:bus-round",
	});
}

export default Component;
