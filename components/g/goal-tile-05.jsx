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
		"content": `<style>.v8xt0lz7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm0 4.5h18M8 11h.01M16 11h.01M12 14.5h.01M8 18h.01M16 18h.01");
}
</style><path class="v8xt0lz7o"/>`,
		"fallback": "uix-sharp:goal-tile-05",
	});
}

export default Component;
