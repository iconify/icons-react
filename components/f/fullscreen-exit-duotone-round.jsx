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
		"content": `<style>.kzvr2u07d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8h1a4 4 0 0 0 4-4V3m8 0v1a4 4 0 0 0 4 4h1m0 8h-1a4 4 0 0 0-4 4v1m-8 0v-1a4 4 0 0 0-4-4H3");
}
</style><path class="kzvr2u07d"/>`,
		"fallback": "coolicons:fullscreen-exit-duotone-round",
	});
}

export default Component;
