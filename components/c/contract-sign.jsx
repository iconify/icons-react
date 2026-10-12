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
		"content": `<style>.he2_snbps {
  width: 12.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ncerflbpl {
  d: path("M7 7h5.5M7 10.25h4m-4 7.5h2M20.6 9.4a1.5 1.5 0 0 1 0 2.1l-7 7l-2.85.75l.75-2.85l7-7a1.5 1.5 0 0 1 2.1 0");
}
</style><g class="hntgybcog"><rect class="he2_snbps"/><path class="ncerflbpl"/></g>`,
		"fallback": "iconoven:contract-sign",
	});
}

export default Component;
