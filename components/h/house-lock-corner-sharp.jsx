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
		"content": `<style>.lfg8nqbha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21H4V10l8-7l5.714 5M13 16h8v5h-8Zm2 0v-1a2 2 0 1 1 4 0v1");
}
</style><path class="lfg8nqbha"/>`,
		"fallback": "coolicons:house-lock-corner-sharp",
	});
}

export default Component;
