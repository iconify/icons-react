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
		"content": `<style>.gjzoqze8y {
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ite58wb9m {
  d: path("M9.606 18.578a7 7 0 0 1 0-13.156m4.788 0a7 7 0 0 1 0 13.156");
}

.iw49jcbqb {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0");
}
</style><g class="hntgybcog"><path class="iw49jcbqb"/><path class="gjzoqze8y"/><path class="ite58wb9m"/></g>`,
		"fallback": "uix:blood-vessel-section",
	});
}

export default Component;
