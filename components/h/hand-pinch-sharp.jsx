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
		"content": `<style>.ko0xn-byz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6.25h12v2.5h-7v4.75l.71-.23l5.1-1.64l1.19-.38v2.5l-1.15.49l-5.16 2.21l-.69.3V19H3V6.25zm14.25 2.5h1.5m-1.5 2.5h1.5");
}
</style><path class="ko0xn-byz"/>`,
		"fallback": "iconoven:hand-pinch-sharp",
	});
}

export default Component;
