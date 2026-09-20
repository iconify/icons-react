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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.gw7hjrxbz {
  d: path("M14.5 10.5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w4qqntb0t {
  d: path("M9.5 10.5v5");
}
</style><g class="hntgybcog"><path class="b5ic9acln"/><path class="w4qqntb0t"/><path class="gw7hjrxbz"/></g>`,
		"fallback": "iconmind:bi-encoder-outline-thin",
	});
}

export default Component;
