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
		"content": `<style>.aynpw1b9r {
  d: path("M4.25 7.5h2.315a1.75 1.75 0 0 0 .819-.203l5.547-2.937A1.75 1.75 0 0 1 15.5 5.907v6.835a1.75 1.75 0 0 1-2.495 1.584l-5.651-2.659a1.75 1.75 0 0 0-.745-.167H4.25A1.75 1.75 0 0 1 2.5 9.75v-.5A1.75 1.75 0 0 1 4.25 7.5m.75 4l1.25 5m8.75 5c0-3 1.75-4 5.75-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zanu6abbg {
  d: path("m18.75 15.5l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="aynpw1b9r"/><path class="zanu6abbg"/></g>`,
		"fallback": "uix:fundraising-share",
	});
}

export default Component;
