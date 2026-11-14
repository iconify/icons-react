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
		"content": `<style>.zcjibdbxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 20H3V2h14v9.7M6.5 6.5h7m-7 4h7m-7 4H10m8 0V18m0 3h.01");
}
</style><path class="zcjibdbxx"/>`,
		"fallback": "uix-sharp:article-alert",
	});
}

export default Component;
