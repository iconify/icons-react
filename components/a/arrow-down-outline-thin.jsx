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
		"content": `<style>.ag27qibsz {
  d: path("m7 15 5 5 5 -5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r7xk8o29f {
  d: path("M12 4v16");
}
</style><g class="hntgybcog"><path class="r7xk8o29f"/><path class="ag27qibsz"/></g>`,
		"fallback": "iconmind:arrow-down-outline-thin",
	});
}

export default Component;
