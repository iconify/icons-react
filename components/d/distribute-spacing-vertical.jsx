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
		"content": `<style>.evvc544pb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 3v4H6V3Zm2.5 7v4h-17v-4ZM16 17v4H8v-4Z");
}
</style><path class="evvc544pb"/>`,
		"fallback": "uix-sharp:distribute-spacing-vertical",
	});
}

export default Component;
