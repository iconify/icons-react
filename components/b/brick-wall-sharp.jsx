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
		"content": `<style>.u2y9v-u5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25h18.5v15.5H2.75zm0 5.25h18.5m-18.5 5h18.5M12 4.25V9.5m-4.5 0v5m9-5v5m-4.5 0v5.25");
}
</style><path class="u2y9v-u5k"/>`,
		"fallback": "iconoven:brick-wall-sharp",
	});
}

export default Component;
