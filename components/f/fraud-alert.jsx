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
		"content": `<style>.am4qc5bry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 19H2.5V5h19v14h-.7M2.5 9.5h19m-19 0h19M6 15h2.5m9.5-.25V18m0 2.75h.01");
}
</style><path class="am4qc5bry"/>`,
		"fallback": "uix-sharp:fraud-alert",
	});
}

export default Component;
