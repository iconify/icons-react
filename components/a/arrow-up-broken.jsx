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
		"content": `<style>.jdep0-bpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 9.99994L12 3.99994L6.00003 9.99994M12 3.99994L12 14.4999M12 19.9999V17.4999");
}
</style><path class="jdep0-bpc"/>`,
		"fallback": "solar:arrow-up-broken",
	});
}

export default Component;
