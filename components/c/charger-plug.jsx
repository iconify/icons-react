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
		"content": `<style>.gx687bb4n {
  d: path("M9.5 2.75v4.5m5-4.5v4.5m-2.5 9.5v4.5m.75-11.75l-2 2.75h2.5l-2 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u0o7738tc {
  width: 12.5px;
  height: 9.5px;
  x: 5.75px;
  y: 7.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="u0o7738tc"/><path class="gx687bb4n"/></g>`,
		"fallback": "iconoven:charger-plug",
	});
}

export default Component;
