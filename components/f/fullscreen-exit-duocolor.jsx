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
		"content": `<style>.tnpvo-xew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8h3a2 2 0 0 0 2-2V3m8 0v3a2 2 0 0 0 2 2h3m0 8h-3a2 2 0 0 0-2 2v3m-8 0v-3a2 2 0 0 0-2-2H3");
}
</style><path class="tnpvo-xew"/>`,
		"fallback": "coolicons:fullscreen-exit-duocolor",
	});
}

export default Component;
