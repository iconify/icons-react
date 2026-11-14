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
		"content": `<style>.oki0xwqzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12h10M3.5 8.5H7v7H3.5Zm13.5 0h3.5v7H17ZM2.5 10v4m19-4v4");
}
</style><path class="oki0xwqzy"/>`,
		"fallback": "uix-sharp:category-fitness-equipment",
	});
}

export default Component;
