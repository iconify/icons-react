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
		"content": `<style>.ctoc2ibvt {
  d: path("M10 6.5h4l-2 2Z");
}

.hzy4vlbdd {
  d: path("M3 13.5h18V21H3Zm1 0L5 3h14l1 10.5");
}

.m5hmsrcrk {
  d: path("M9.5 11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hzy4vlbdd"/><path class="m5hmsrcrk"/><path class="ctoc2ibvt"/></g>`,
		"fallback": "uix-sharp:engagement-ring-box",
	});
}

export default Component;
