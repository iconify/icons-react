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
		"content": `<style>.l2c6zdfty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12V9.25C11 8 13 7 12 6s1-2 0-3.25M8.75 11V9.5c-.75-.9.75-1.6 0-2.5m6.5 4V9.5c-.75-.9.75-1.6 0-2.5M6.5 12h11a5.5 4.5 0 0 1-11 0Zm1.75 7h7.5v2.25h-7.5z");
}
</style><path class="l2c6zdfty"/>`,
		"fallback": "iconoven:incense-burner-sharp",
	});
}

export default Component;
