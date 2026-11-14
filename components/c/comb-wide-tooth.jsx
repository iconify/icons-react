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
		"content": `<style>.b_0irbb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h19v4.5h-19ZM5 10.5V18m3.5-7.5V18m3.5-7.5V18m3.5-7.5V18m3.5-7.5V18");
}
</style><path class="b_0irbb5j"/>`,
		"fallback": "uix-sharp:comb-wide-tooth",
	});
}

export default Component;
