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

.ro9-hrbda {
  d: path("m15.5 6l2 2l-2 2m-11 4l2 2l-2 2");
}

.y7xsi4c9u {
  d: path("M12 12c-2.5-5-9-6-9 0s6.5 5 9 0s9-6 9 0s-6.5 5-9 0");
}
</style><g class="hntgybcog"><path class="y7xsi4c9u"/><path class="ro9-hrbda"/></g>`,
		"fallback": "uix:devops",
	});
}

export default Component;
