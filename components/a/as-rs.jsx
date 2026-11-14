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
		"content": `<style>.qjpzagbot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H12v19H2.5Zm4.75 0v19M2.5 8.75H12m-9.5 6.5H12M18.5 2.5v19M15 11h3.5M12 21.5h9.5");
}
</style><path class="qjpzagbot"/>`,
		"fallback": "uix-sharp:as-rs",
	});
}

export default Component;
