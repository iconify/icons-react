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
		"content": `<style>.oiqkce4vb {
  d: path("M13 5h6v4h-6Z");
}

.rmcfrrb-t {
  d: path("M6 3v12c0 3 2 4 5 4h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rmcfrrb-t"/><path class="oiqkce4vb"/></g>`,
		"fallback": "iconmind:ice-hockey-outline-bold",
	});
}

export default Component;
