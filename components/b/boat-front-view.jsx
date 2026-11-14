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
		"content": `<style>.zj73v5x5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13h17c0 5-3.5 8-8.5 8s-8.5-3-8.5-8Zm2 0L12 2.5L18.5 13M12 2.5V13");
}
</style><path class="zj73v5x5p"/>`,
		"fallback": "uix-sharp:boat-front-view",
	});
}

export default Component;
