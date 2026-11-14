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
		"content": `<style>.gtlvn11yi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.75V2.5m2 5l3-3m-2.25 5H19m-5 2l3 3m-7-3l-3 3m2.25-5H5m5-2l-3-3m1.5 17c2.5-2 3.5-4 3.5-7.5m0-4.5h.01");
}
</style><path class="gtlvn11yi"/>`,
		"fallback": "uix-sharp:independence-fireworks",
	});
}

export default Component;
