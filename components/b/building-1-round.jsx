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
		"content": `<style>.pnpfqrbfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M9 20v-5.078a4 4 0 0 1 1.501-3.123l1-.8a4 4 0 0 1 4.998 0l1 .8A4 4 0 0 1 19 14.923V20m-7-9.4V4H9a4 4 0 0 0-4 4v12");
}
</style><path class="pnpfqrbfm"/>`,
		"fallback": "coolicons:building-1-round",
	});
}

export default Component;
