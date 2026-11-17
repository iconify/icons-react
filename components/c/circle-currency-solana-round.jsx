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
		"content": `<style>.a-6x9h9kh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m7-5h5l-1 1H9zm-2 4h6l2 2h-6zm2 5h5l-1 1H9z");
}
</style><path class="a-6x9h9kh"/>`,
		"fallback": "coolicons:circle-currency-solana-round",
	});
}

export default Component;
