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
		"content": `<style>.fbes49b5d {
  stroke-opacity: 0.4;
  d: path("M5 12v3m0 5v1m7-18v2m0 7v3m7-3v3m0 4v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sz_szbb7r {
  d: path("M3 17a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Zm7-10a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0Zm7 10a2 2 0 1 1 4 0a2 2 0 0 1-4 0");
}
</style><g class="nrj6p8qat"><path class="fbes49b5d"/><path class="sz_szbb7r"/></g>`,
		"fallback": "coolicons:chart-candlestick-duocolor-round",
	});
}

export default Component;
