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
		"content": `<style>.de-xkci3q {
  d: path("m14.283 7.026l4.994 8.804a2.625 2.625 0 0 1-2.284 3.92H7.007a2.625 2.625 0 0 1-2.284-3.92l4.994-8.804a2.625 2.625 0 0 1 4.566 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vurbhvbeq {
  d: path("m11.649 9.688l-1.898 2.91a.745.745 0 0 0 .624 1.152a1.193 1.193 0 0 1 1.181 1.361l-.056.389a.431.431 0 0 0 .777.312l1.924-2.693A.708.708 0 0 0 13.625 12a1.214 1.214 0 0 1-1.204-1.364L12.5 10a.465.465 0 0 0-.851-.312");
}
</style><g class="hntgybcog"><path class="de-xkci3q"/><path class="vurbhvbeq"/></g>`,
		"fallback": "uix:high-voltage",
	});
}

export default Component;
