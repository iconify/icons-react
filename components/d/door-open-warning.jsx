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

.szso97bmb {
  d: path("M9 7.25h6m-5.5 9.5h5M7.25 9l-4 3.75M16.75 9l4 3.75");
}

.tn2f5sb9a {
  width: 9.5px;
  height: 18.5px;
  x: 7.25px;
  y: 2.75px;
  rx: 3.5px;
}
</style><g class="hntgybcog"><rect class="tn2f5sb9a"/><path class="szso97bmb"/></g>`,
		"fallback": "iconoven:door-open-warning",
	});
}

export default Component;
