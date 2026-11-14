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
		"content": `<style>.s82vw2bjn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9a5.5 5.5 0 0 1 11 0m-14 0h17M3 20h18M12 2v1.5m-5.5 8.25v5.5m3.75-5.5v5.5m3.5-5.5v5.5m3.75-5.5v5.5");
}
</style><path class="s82vw2bjn"/>`,
		"fallback": "uix-sharp:bank-building",
	});
}

export default Component;
