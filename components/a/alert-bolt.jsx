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
		"content": `<style>.bpc_yjb2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 2.5L4.5 13h6l-1 8l8-10.5h-6Zm5.5 12V18m0 3h.01");
}
</style><path class="bpc_yjb2o"/>`,
		"fallback": "uix:alert-bolt",
	});
}

export default Component;
