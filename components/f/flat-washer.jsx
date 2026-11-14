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
		"content": `<style>.dqqdq_23d {
  d: path("M8.5 10.5a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0Z");
}

.t42ot7bfe {
  d: path("M3 10.5a9 5.5 0 1 0 18 0a9 5.5 0 1 0-18 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yev75xqlb {
  d: path("M3 10.5V13a9 5.5 0 0 0 18 0v-2.5");
}
</style><g class="ulnmmdpxh"><path class="t42ot7bfe"/><path class="yev75xqlb"/><path class="dqqdq_23d"/></g>`,
		"fallback": "uix-sharp:flat-washer",
	});
}

export default Component;
