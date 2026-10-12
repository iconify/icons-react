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
		"content": `<style>.f2rhuvbid {
  width: 14.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t2mq0suwj {
  d: path("M6.5 7.5h7m-7 3.5h7m-7 3.5h3M18.25 9a1.6 1.6 0 0 1 2.25 2.25l-6.5 6.5l-3 .75l.75-3Z");
}
</style><g class="hntgybcog"><rect class="f2rhuvbid"/><path class="t2mq0suwj"/></g>`,
		"fallback": "iconoven:draft-post",
	});
}

export default Component;
