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

.ivk9cqevc {
  d: path("M12 17c-4 -2 -5.5 -6 -3 -10 1.5 2.5 3 2.5 3 1 0 -2.5 -1.5 -4 0 -6 3 2.5 5.5 5 5.5 9 0 3.5 -2.5 5 -5.5 6");
}

.u78lc2bnx {
  d: path("M6 20h12");
}
</style><g class="hntgybcog"><path class="ivk9cqevc"/><path class="u78lc2bnx"/></g>`,
		"fallback": "iconmind:campfire-outline-thin",
	});
}

export default Component;
