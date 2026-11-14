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
		"content": `<style>.jnlvbobrs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5v2A3.5 3.5 0 0 1 18 13H6a3.5 3.5 0 0 1-3.5-3.5v-2A3.5 3.5 0 0 1 6 4m0 6h12M7.5 16l-1 4.5M12 16v4.5m4.5-4.5l1 4.5");
}
</style><path class="jnlvbobrs"/>`,
		"fallback": "uix:ac-on",
	});
}

export default Component;
