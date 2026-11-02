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
		"content": `<style>.y4t73obvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 17v-3a8.062 8.062 0 0 1 12-8m3 3a8.1 8.1 0 0 1 1 3v4m-8-3v5m-4 1v-6a4 4 0 1 1 8 0v3");
}
</style><path class="y4t73obvc"/>`,
		"fallback": "coolicons:fingerprint-duotone-sharp",
	});
}

export default Component;
