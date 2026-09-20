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
		"content": `<style>.d7smd9b8i {
  d: path("M2 8h13a3.5 3.5 0 1 0 -3.5 -3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5_ol6yqz {
  d: path("M2 17h12a3.5 3.5 0 1 0 -3.5 3.5");
}
</style><g class="hntgybcog"><path class="d7smd9b8i"/><path class="v5_ol6yqz"/></g>`,
		"fallback": "iconmind:breeze-outline-thin",
	});
}

export default Component;
