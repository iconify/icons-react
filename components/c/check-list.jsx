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
		"content": `<style>.kvh4fdbvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 6l1.75 1.75L8 4.5M3 13l1.75 1.75L8 11.5M11 6h10m-10 7h10M3 17.5h4.5v4H3Zm8 2h10");
}
</style><path class="kvh4fdbvt"/>`,
		"fallback": "uix-sharp:check-list",
	});
}

export default Component;
