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
		"content": `<style>.c76yyhlat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.625 7.5h4.75A2.625 2.625 0 0 1 17 10.125v3.75a2.625 2.625 0 0 1-2.625 2.625h-4.75A2.625 2.625 0 0 1 7 13.875v-3.75A2.625 2.625 0 0 1 9.625 7.5M2.5 12H7m10 0h4.5M12 7.5v9");
}
</style><path class="c76yyhlat"/>`,
		"fallback": "uix:dsl-filter",
	});
}

export default Component;
