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
		"content": `<style>.f9z-0cczq {
  d: path("M9 10.5h6");
}

.hbdbg_bcy {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.js960j4-t {
  d: path("M12 7.5v6");
}

.lyjarcbwz {
  d: path("M7 18v3l3 -3");
}
</style><g class="hntgybcog"><path class="hbdbg_bcy"/><path class="lyjarcbwz"/><path class="js960j4-t"/><path class="f9z-0cczq"/></g>`,
		"fallback": "iconmind:chat-add-outline-thin",
	});
}

export default Component;
