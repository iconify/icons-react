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
		"content": `<style>.f2lesq7pb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 11l7.671-6.819a2 2 0 0 1 2.658 0L21 11m-2-1.778V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9.222M12 17h-2a1 1 0 0 1-1-1v-3.884a1 1 0 0 1 .336-.748l2-1.777a1 1 0 0 1 1.328 0l2 1.777a1 1 0 0 1 .336.748V16a1 1 0 0 1-1 1z");
}
</style><path class="f2lesq7pb"/>`,
		"fallback": "coolicons:house-alt-4",
	});
}

export default Component;
