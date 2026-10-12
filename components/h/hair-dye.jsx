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
		"content": `<style>.zi5t206xl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13 8.25l5.75-5.5m-5.67 6.58l-1.16-1.16q-.42-.42-.84 0L9.92 9.33q-.42.42 0 .84l1.16 1.16q.42.42.84 0l1.16-1.16q.42-.42 0-.84M2.75 14h14.5a7.25 7.25 0 0 1-14.5 0M6 17h8");
}
</style><path class="zi5t206xl"/>`,
		"fallback": "iconoven:hair-dye",
	});
}

export default Component;
