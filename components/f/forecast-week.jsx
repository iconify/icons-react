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
		"content": `<style>.omw27-h-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12h9a3 3 0 0 0 0-6a5 5 0 0 0-9 1a2.5 2.5 0 0 0 0 5Zm-5.25 2.75h19.5V21H2.25Zm2.75 0V21m2.75-6.25V21m2.75-6.25V21m3-6.25V21m2.75-6.25V21M19 14.75V21");
}
</style><path class="omw27-h-j"/>`,
		"fallback": "uix-sharp:forecast-week",
	});
}

export default Component;
