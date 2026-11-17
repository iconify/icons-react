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

.kwdque6bj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 5h4v7h-4ZM3 15h4v5H3Zm14 0h4v4h-4Z");
}

.oayitabvd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 15h4v5H3Zm7-10h4v7h-4Zm7 10h4v4h-4ZM5 12v3m0 5v1m7-18v2m0 7v3m7-3v3m0 4v2");
}
</style><g class="ft5dv1b6b"><path class="kwdque6bj"/><path class="oayitabvd"/></g>`,
		"fallback": "coolicons:chart-candlestick-duotone-sharp",
	});
}

export default Component;
