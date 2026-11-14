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
		"content": `<style>.grapi_-bv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.1 20H3V2h14v10.7M6.5 6.5h7m-7 4h7m-7 4H10m8.5 7l-3-3a1.75 1.75 0 0 1 3-2.25a1.75 1.75 0 0 1 3 2.25Z");
}
</style><path class="grapi_-bv"/>`,
		"fallback": "uix-sharp:article-heart",
	});
}

export default Component;
