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

.rv-rerbli {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m9.5 6V6.5");
}

.y-mrzhbos {
  d: path("M12 15.5c-2 0-3.25-1.25-3.25-3c2 0 3.25 1.25 3.25 3m0 0c2 0 3.25-1.25 3.25-3c-2 0-3.25 1.25-3.25 3m0-4c-2 0-3.25-1.25-3.25-3c2 0 3.25 1.25 3.25 3m0 0c2 0 3.25-1.25 3.25-3c-2 0-3.25 1.25-3.25 3");
}
</style><g class="hntgybcog"><path class="rv-rerbli"/><path class="y-mrzhbos"/></g>`,
		"fallback": "uix:allergen-wheat",
	});
}

export default Component;
