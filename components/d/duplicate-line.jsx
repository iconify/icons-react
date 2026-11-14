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
		"content": `<style>.v5yvb0hyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h9m3 0h6M3 11h9m3 0h6m-3 4v6m-3-3h6");
}
</style><path class="v5yvb0hyk"/>`,
		"fallback": "uix-sharp:duplicate-line",
	});
}

export default Component;
