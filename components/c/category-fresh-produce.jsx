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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q2-zfvbmg {
  d: path("M12 8S7 5.5 5 9.5c-1.5 3.5 1 10 7 10s8.5-6.5 7-10c-2-4-7-1.5-7-1.5");
}

.u_8fqnblg {
  d: path("M12 8c0-2.5 1.5-4.5 4-5");
}
</style><g class="hntgybcog"><path class="q2-zfvbmg"/><path class="u_8fqnblg"/></g>`,
		"fallback": "uix:category-fresh-produce",
	});
}

export default Component;
