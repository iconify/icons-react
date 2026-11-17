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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ty2xixbmc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Zm7-10a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0Zm7 10a2 2 0 1 1 4 0a2 2 0 0 1-4 0M5 12v3m0 5v1m7-18v2m0 7v3m7-3v3m0 4v2");
}

.xx7edmbni {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 7a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0ZM3 17a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Zm14 0a2 2 0 1 1 3.999-.001A2 2 0 0 1 17 17");
}
</style><g class="ft5dv1b6b"><path class="xx7edmbni"/><path class="ty2xixbmc"/></g>`,
		"fallback": "coolicons:chart-candlestick-duotone-round",
	});
}

export default Component;
