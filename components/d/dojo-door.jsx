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
		"content": `<style>.wj0nhoxaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8l3.5-4.5h11L21 8Zm1 0v13.5h16V8m-8 0v13.5M9.25 13v3.5m5.5-3.5v3.5");
}
</style><path class="wj0nhoxaz"/>`,
		"fallback": "uix-sharp:dojo-door",
	});
}

export default Component;
