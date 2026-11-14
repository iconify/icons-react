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
		"content": `<style>.g1crxmw2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 2v14a4.5 4.5 0 0 1-9 0v-4.5m0 0L9.75 14");
}
</style><path class="g1crxmw2o"/>`,
		"fallback": "uix-sharp:anchor-fish-hook",
	});
}

export default Component;
