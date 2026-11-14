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
		"content": `<style>.fy3v0_fui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5V3h14v18.5M5 17h14M5 7l10 10M9 3l10 10M5 13L15 3M9 17L19 7");
}
</style><path class="fy3v0_fui"/>`,
		"fallback": "uix-sharp:garden-trellis",
	});
}

export default Component;
