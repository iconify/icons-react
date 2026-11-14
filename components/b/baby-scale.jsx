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
		"content": `<style>.blu_v_lxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 15h12.75A2.625 2.625 0 0 1 21 17.625v1.25a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 18.875v-1.25A2.625 2.625 0 0 1 5.625 15M2.5 6.5c0 4 4 5.75 9.5 5.75s9.5-1.75 9.5-5.75M12 12.25V15m-2 3.25h4");
}
</style><path class="blu_v_lxt"/>`,
		"fallback": "uix:baby-scale",
	});
}

export default Component;
