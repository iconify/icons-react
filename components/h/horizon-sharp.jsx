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
		"content": `<style>.ddv4-1hmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.5h18.5m-9.25 0L4.5 21.25M12 10.5l7.5 10.75m-7.5-7v1.5m0 2.5v3");
}
</style><path class="ddv4-1hmq"/>`,
		"fallback": "iconoven:horizon-sharp",
	});
}

export default Component;
