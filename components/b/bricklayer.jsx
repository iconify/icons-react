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
		"content": `<style>.v7za6dj7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8h11M6 8a4 4 0 0 1 8 0M6 8v1.5a4 4 0 0 0 8 0V8M2.5 21c0-2.75 3.25-4.5 7.5-4.5s7.5 1.75 7.5 4.5m2.452-10.5h.096a1.5 1.5 0 0 0 1.449-1.886L21 6.75a1.035 1.035 0 0 0-2 0l-.497 1.864a1.5 1.5 0 0 0 1.449 1.886m.048 0v4");
}
</style><path class="v7za6dj7c"/>`,
		"fallback": "uix:bricklayer",
	});
}

export default Component;
