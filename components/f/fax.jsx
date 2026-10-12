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
		"content": `<style>.fsqgmlgpw {
  d: path("M10.75 9.25v-6.5H17L19.25 5v4.25M11 13.5h6.75M11 17.25h6.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.irbwwwb3e {
  width: 13.5px;
  height: 12px;
  x: 7.75px;
  y: 9.25px;
  rx: 2px;
}

.wk127qhly {
  width: 2.5px;
  height: 13.5px;
  x: 2.75px;
  y: 7.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="wk127qhly"/><rect class="irbwwwb3e"/><path class="fsqgmlgpw"/></g>`,
		"fallback": "iconoven:fax",
	});
}

export default Component;
