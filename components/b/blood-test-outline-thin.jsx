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

.j4a3yvbid {
  d: path("m12 9 3 3a4 4 0 0 1 -6 0Z");
}

.va9i39bae {
  d: path("M7 3h10");
}

.x2vm1eh6r {
  d: path("M9 3v15h6V3");
}
</style><g class="hntgybcog"><path class="x2vm1eh6r"/><path class="va9i39bae"/><path class="j4a3yvbid"/></g>`,
		"fallback": "iconmind:blood-test-outline-thin",
	});
}

export default Component;
