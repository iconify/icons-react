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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-3ib9fxz {
  d: path("M12 11v7");
}

.s09hy0b0y {
  d: path("M7 11h10");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="s09hy0b0y"/><path class="r-3ib9fxz"/></g>`,
		"fallback": "iconmind:data-contract-outline-thin",
	});
}

export default Component;
