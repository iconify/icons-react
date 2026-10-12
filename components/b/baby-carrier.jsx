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

.oicbsxx-q {
  cx: 12px;
  cy: 9.25px;
  r: 1.5px;
}

.wwvp8_bwy {
  d: path("M7.5 13.75h9a4.5 4.5 0 0 1-9 0");
}

.yflv5rb0a {
  d: path("M3.75 21.25V7A4.25 4.25 0 0 1 8 2.75h2a2 2 0 0 0 4 0h2A4.25 4.25 0 0 1 20.25 7v14.25ZM7.5 2.9v10.85m9-10.85v10.85");
}
</style><g class="hntgybcog"><path class="yflv5rb0a"/><path class="wwvp8_bwy"/><circle class="oicbsxx-q"/></g>`,
		"fallback": "iconoven:baby-carrier",
	});
}

export default Component;
