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
		"content": `<style>.bczv-ub-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.4 13H2.5V3.5h17v9.2m-13-4.45h.01m3.49 0h5.5m0 8.75h6m-5 0v4.75h4V17m-3.25-1.5h2.5");
}
</style><path class="bczv-ub-c"/>`,
		"fallback": "uix-sharp:infra-destroy",
	});
}

export default Component;
