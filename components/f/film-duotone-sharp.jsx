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
		"content": `<style>.d5qvkcbrs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18v18H3Zm4 0v18M17 3v18M3 8h4m-4 4h18M3 16h4m10-8h4m-4 8h4");
}

.ft5dv1b6b {
  fill: none;
}

.n06gsnbsc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 21V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1");
}
</style><g class="ft5dv1b6b"><path class="n06gsnbsc"/><path class="d5qvkcbrs"/></g>`,
		"fallback": "coolicons:film-duotone-sharp",
	});
}

export default Component;
