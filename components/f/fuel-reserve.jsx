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
		"content": `<style>.vkhcw_bcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5a9.5 9.5 0 0 1 19 0Zm2.75-6.75L7.5 13m11.25-2.25L16.5 13M12 17.5l-5.75-3.25");
}
</style><path class="vkhcw_bcl"/>`,
		"fallback": "uix-sharp:fuel-reserve",
	});
}

export default Component;
