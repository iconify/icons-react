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
		"content": `<style>.ber_dvuri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.75v12m5.25-5.25L12 19.75L6.75 14.5m12.5-10.75H4.75");
}
</style><path class="ber_dvuri"/>`,
		"fallback": "iconoven:arrow-down-from-line-sharp",
	});
}

export default Component;
