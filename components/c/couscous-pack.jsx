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
		"content": `<style>.b2kavabyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17a8.5 8.5 0 0 1-17 0Zm2 0c0-5 3-7.25 6.5-7.25S18.5 6 18.5 11M9.25 8.25h.01m5.49 0h.01M12 6.75h.01");
}
</style><path class="b2kavabyp"/>`,
		"fallback": "uix-sharp:couscous-pack",
	});
}

export default Component;
