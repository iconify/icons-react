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
		"content": `<style>.xwxvmrq0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4v15m0-7h12.1m.8 0h4.2m.9-3.5V12m-5.5 3.5l5 5m0-5l-5 5");
}
</style><path class="xwxvmrq0o"/>`,
		"fallback": "uix-sharp:bed-x",
	});
}

export default Component;
