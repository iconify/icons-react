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
		"content": `<style>.dwxnb3b1l {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 12 5.5 5.5L20 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mwvgb4bmz {
  d: path("m4 12 5.5 5.5L20 7");
}
</style><g class="hntgybcog"><path class="dwxnb3b1l"/><path class="mwvgb4bmz"/></g>`,
		"fallback": "iconmind:check-duotone-thin",
	});
}

export default Component;
