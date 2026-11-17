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
		"content": `<style>.krzcvbcae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5v6l-1 1a1.414 1.414 0 0 0 0 2l1 1v4c0 1.105 2.686 2 6 2s6-.895 6-2v-6l1-1a1.414 1.414 0 0 0 0-2l-1-1V5m-8 7v4M6 5c0-1.105 2.686-2 6-2s6 .895 6 2M6 5c0 1.105 2.686 2 6 2s6-.895 6-2");
}
</style><path class="krzcvbcae"/>`,
		"fallback": "coolicons:firewood-round",
	});
}

export default Component;
