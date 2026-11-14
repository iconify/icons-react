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
		"content": `<style>.hm3_rkbah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 4.5v15m4.5-15v15m-8-10h12m-12 5h12M2.5 7H6m-3.5 5h4m-4 5H6");
}
</style><path class="hm3_rkbah"/>`,
		"fallback": "uix:hash-rate",
	});
}

export default Component;
