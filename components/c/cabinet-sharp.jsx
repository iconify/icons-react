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
		"content": `<style>.xfji-idkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25h18.5v15H2.75zm0 4.75h18.5M12 9v10.25M10.5 6.6h3m-4 5.4v2.5m5-2.5v2.5M6 19.25v2m12-2v2");
}
</style><path class="xfji-idkr"/>`,
		"fallback": "iconoven:cabinet-sharp",
	});
}

export default Component;
