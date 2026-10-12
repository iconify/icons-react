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
		"content": `<style>.hj7lyxbgx {
  width: 17.5px;
  height: 9px;
  x: 3.25px;
  y: 12.25px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m7fneibvi {
  d: path("M6.75 15.25v2.5m10.5-2.5v2.5M10.75 21v-2.75a1.25 1.25 0 0 1 2.5 0V21");
}

.pxt3cfb7i {
  d: path("M12 12.25v-9.5m0 .5h6.75L17.5 5.5l1.25 2.25H12Z");
}
</style><g class="hntgybcog"><path class="pxt3cfb7i"/><rect class="hj7lyxbgx"/><path class="m7fneibvi"/></g>`,
		"fallback": "iconoven:embassy-flag",
	});
}

export default Component;
