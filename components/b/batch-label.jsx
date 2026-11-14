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
		"content": `<style>.u063ylb8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v14h-19ZM6 8.75h8M6.5 12v3.75M9.25 12v3.75M12 12v3.75M14.75 12v3.75M17.5 12v3.75");
}
</style><path class="u063ylb8b"/>`,
		"fallback": "uix-sharp:batch-label",
	});
}

export default Component;
