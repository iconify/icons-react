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
		"content": `<style>.n4ygy-bre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19v5h-19Zm2.5 0l-1.5-9m1.5 9l1.5-9m5.5 9L10.5 4M12 15.5L13.5 4M19 15.5l-1.5-9m1.5 9l1.5-9");
}
</style><path class="n4ygy-bre"/>`,
		"fallback": "uix-sharp:artificial-turf",
	});
}

export default Component;
