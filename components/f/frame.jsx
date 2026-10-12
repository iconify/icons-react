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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iilnymbwy {
  width: 4px;
  height: 4px;
  x: 10px;
  y: 10px;
  rx: 1px;
}

.u65952buc {
  d: path("M7.25 3.75v16.5m9.5-16.5v16.5m-13-13h16.5m-16.5 9.5h16.5");
}
</style><g class="hntgybcog"><path class="u65952buc"/><rect class="iilnymbwy"/></g>`,
		"fallback": "iconoven:frame",
	});
}

export default Component;
