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
		"content": `<style>.r7bvoobsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.6 20H3V2h14v9.7M6.5 6.5h7m-7 4h7m-7 4H10m8 0v7m-3-3l3 3l3-3");
}
</style><path class="r7bvoobsx"/>`,
		"fallback": "uix-sharp:article-download",
	});
}

export default Component;
