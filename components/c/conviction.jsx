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
		"content": `<style>.agyx_bb2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.055 5.373l7.072 7.072l-3.182 3.182l-7.072-7.072ZM10.5 9l6.25-6.25M12.5 21.4v.1h-10v-3h10v1.1m3-4.1l5 5m0-5l-5 5");
}
</style><path class="agyx_bb2p"/>`,
		"fallback": "uix-sharp:conviction",
	});
}

export default Component;
