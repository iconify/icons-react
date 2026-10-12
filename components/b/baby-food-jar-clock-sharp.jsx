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
		"content": `<style>.o51_p9b4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5V6H6.25zM5.25 9h13.5v12.25H5.25zm3.5 4.5h6.5m-6.5 3.25h4");
}
</style><path class="o51_p9b4a"/>`,
		"fallback": "iconoven:baby-food-jar-clock-sharp",
	});
}

export default Component;
