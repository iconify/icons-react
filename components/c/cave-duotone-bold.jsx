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
		"content": `<style>.mp3b81b8y {
  d: path("M3 21v-9l9 -9 9 9v9Z");
}

.nxy-5-bpb {
  fill: currentColor;
  d: path("M3 21v-9l9 -9 9 9v9Z");
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

.sur-qkf7m {
  d: path("M7 21a5 5 0 0 1 10 0");
}
</style><g class="s0phu2bbs"><path class="nxy-5-bpb"/><path class="mp3b81b8y"/><path class="sur-qkf7m"/></g>`,
		"fallback": "iconmind:cave-duotone-bold",
	});
}

export default Component;
