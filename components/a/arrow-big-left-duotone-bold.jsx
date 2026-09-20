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
		"content": `<style>.cq4cz2bia {
  d: path("m3 12 9 -9v5h9v8h-9v5Z");
}

.r4vbc_6fl {
  fill: currentColor;
  d: path("m3 12 9 -9v5h9v8h-9v5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r4vbc_6fl"/><path class="cq4cz2bia"/></g>`,
		"fallback": "iconmind:arrow-big-left-duotone-bold",
	});
}

export default Component;
