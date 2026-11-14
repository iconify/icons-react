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
		"content": `<style>.bdvb_nbvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5h18V20H3Zm5.5 0V5A1.5 1.5 0 0 1 10 3.5h4A1.5 1.5 0 0 1 15.5 5v1.5M12 10v6.5m-3.25-3.25h6.5");
}
</style><path class="bdvb_nbvg"/>`,
		"fallback": "uix-sharp:first-aid-kit",
	});
}

export default Component;
