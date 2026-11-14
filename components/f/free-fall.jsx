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
		"content": `<style>.hs3u2rwhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 12.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-5 8h18M9.75 3v3m4.5-3v3");
}
</style><path class="hs3u2rwhi"/>`,
		"fallback": "uix-sharp:free-fall",
	});
}

export default Component;
