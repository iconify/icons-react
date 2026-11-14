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
		"content": `<style>.k-s96sb5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm1.75-11v7m9.5-7v7M12 20v1.75");
}
</style><path class="k-s96sb5p"/>`,
		"fallback": "uix-sharp:bladder",
	});
}

export default Component;
