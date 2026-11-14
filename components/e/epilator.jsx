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
		"content": `<style>.rl9wvnbfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5h14v4H5Zm2.5-3v3m3-3v3m3-3v3m3-3v3m-8 4V19a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5V9.5M12 13v3");
}
</style><path class="rl9wvnbfe"/>`,
		"fallback": "uix-sharp:epilator",
	});
}

export default Component;
