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

.ntyri_bie {
  stroke-opacity: 0.4;
  d: path("M21 19a2 2 0 1 1-4 0c0-1 1-2 2-3c1 1 2 2 2 3");
}

.o0rm0nbuy {
  d: path("M3 6h16a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H3zm0-2v8m4-9h6m-3 0v3");
}
</style><g class="nrj6p8qat"><path class="ntyri_bie"/><path class="o0rm0nbuy"/></g>`,
		"fallback": "coolicons:faucet-duocolor",
	});
}

export default Component;
