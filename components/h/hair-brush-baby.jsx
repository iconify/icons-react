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
		"content": `<style>.jn49khb5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8h15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm5.5 6h4v7.5h-4ZM7 3.5V8m3.5-4.5V8m3-4.5V8M17 3.5V8");
}
</style><path class="jn49khb5n"/>`,
		"fallback": "uix-sharp:hair-brush-baby",
	});
}

export default Component;
