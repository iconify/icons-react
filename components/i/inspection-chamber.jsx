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
		"content": `<style>.egjj_b_-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h15.5v3.5H6Zm2 3.5v13h11.5v-13M2.5 12H8m-5.5 4H8");
}
</style><path class="egjj_b_-p"/>`,
		"fallback": "uix-sharp:inspection-chamber",
	});
}

export default Component;
