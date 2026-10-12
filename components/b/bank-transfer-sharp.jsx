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
		"content": `<style>.ardt3zb7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.52 8.61l4.21-3.47l.77-.64l.77.64l4.21 3.47l.77.64H2.75zM5 12v5m3.5-5v5m3.5-5v5m-9 2.75h11M16.25 12h5m-2.5-2.5l2.5 2.5l-2.5 2.5");
}
</style><path class="ardt3zb7k"/>`,
		"fallback": "iconoven:bank-transfer-sharp",
	});
}

export default Component;
