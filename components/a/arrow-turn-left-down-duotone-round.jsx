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
		"content": `<style>.hmg_jib4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 12l5 5l5-5m8-5h-9a4 4 0 0 0-4 4v6");
}
</style><path class="hmg_jib4s"/>`,
		"fallback": "coolicons:arrow-turn-left-down-duotone-round",
	});
}

export default Component;
