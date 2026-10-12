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
		"content": `<style>.dnxalmgga {
  cx: 8.25px;
  cy: 4.75px;
  r: 1.75px;
}

.he-7u82-e {
  d: path("M5 21.25h2.5L17 9.75h2a2.25 2.25 0 0 0 0-4.5h-2.5L7 16.75H5a2.25 2.25 0 0 0 0 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.okmc-p4gg {
  d: path("M8.25 8.5v3.75");
}
</style><g class="hntgybcog"><path class="he-7u82-e"/><circle class="dnxalmgga"/><path class="okmc-p4gg"/></g>`,
		"fallback": "iconoven:escalator",
	});
}

export default Component;
