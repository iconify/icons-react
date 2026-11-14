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
		"content": `<style>.w6dkngitz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.1 20H3V2h14v11.1M6.5 6.5h7m-7 4h7m-7 4H10m5.5 1l5 5m0-5l-5 5");
}
</style><path class="w6dkngitz"/>`,
		"fallback": "uix-sharp:article-x",
	});
}

export default Component;
