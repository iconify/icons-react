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
		"content": `<style>.ylx6pnu3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19m17-19v19M3.5 10h17m-17 7.5h17M6.5 6H11v4H6.5Zm0 7.5H11v4H6.5Z");
}
</style><path class="ylx6pnu3p"/>`,
		"fallback": "uix-sharp:crew-rest-bunk",
	});
}

export default Component;
