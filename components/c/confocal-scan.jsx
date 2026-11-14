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
		"content": `<style>.u80rgjrsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.75h13l4-4h-13Zm0 4h13l4-4m-17 8h13l4-4M12 3.25v7.5");
}
</style><path class="u80rgjrsl"/>`,
		"fallback": "uix-sharp:confocal-scan",
	});
}

export default Component;
