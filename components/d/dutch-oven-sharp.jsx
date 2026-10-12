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
		"content": `<style>.s9wxn065f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.5v-2m-6.5 5a6.5 3 0 0 1 13 0Zm0 2.5h13v7.5h-13v-4Zm0 2.25h-2m15 0h2");
}
</style><path class="s9wxn065f"/>`,
		"fallback": "iconoven:dutch-oven-sharp",
	});
}

export default Component;
