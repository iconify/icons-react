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
		"content": `<style>.t8l_15c6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19m-19 18h19M5 3v18M19 3v18M9 6.5h6v11H9Zm0 3.75h6m-6 3.5h6");
}
</style><path class="t8l_15c6g"/>`,
		"fallback": "uix-sharp:colocation-cage",
	});
}

export default Component;
