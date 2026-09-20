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
		"content": `<style>.hhh6epqom {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nlcrm52qp {
  d: path("m8 18.5 2 2 4 -4");
}
</style><g class="hntgybcog"><path class="hhh6epqom"/><path class="nlcrm52qp"/></g>`,
		"fallback": "iconmind:finally-block-outline-thin",
	});
}

export default Component;
