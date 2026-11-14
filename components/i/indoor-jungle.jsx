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
		"content": `<style>.g0s885dmy {
  d: path("M10 16h6l-1 5h-4Zm3 0c-3-1-6.5-4-7-8c3.5.5 6.5 3.5 7 8Zm0 0c-2-4-1.5-9 0-12c1.5 3 2 8 0 12Zm0 0c3-1 6.5-4 7-8c-3.5.5-6.5 3.5-7 8Z");
}

.n0va9tb5h {
  d: path("M3 3v18h18.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n0va9tb5h"/><path class="g0s885dmy"/></g>`,
		"fallback": "uix-sharp:indoor-jungle",
	});
}

export default Component;
