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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p43mfzb5b {
  stroke-opacity: 0.4;
  d: path("M10 7h5l-1 1H9zm-2 4h6l2 2h-6zm2 5h5l-1 1H9z");
}

.q_a5zcbnk {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}
</style><g class="nrj6p8qat"><path class="p43mfzb5b"/><path class="q_a5zcbnk"/></g>`,
		"fallback": "coolicons:circle-currency-solana-duocolor",
	});
}

export default Component;
