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
		"content": `<style>.ogutlrbuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9.75v-7h3v7Zm0-3h3m-4.75 3h6.5v7.5h-6.5zm3.25 7.5v4");
}
</style><path class="ogutlrbuq"/>`,
		"fallback": "iconoven:audio-jack-sharp",
	});
}

export default Component;
