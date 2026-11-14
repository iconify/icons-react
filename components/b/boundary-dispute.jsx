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
		"content": `<style>.r525pqx_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h2.5V20H3Zm6 0h2.5V20H9Zm6 0h2.5V20H15ZM5.5 9H9m-3.5 6.5H9M11.5 9H15m-3.5 6.5H15m5.5-1V18m0 3h.01");
}
</style><path class="r525pqx_n"/>`,
		"fallback": "uix-sharp:boundary-dispute",
	});
}

export default Component;
