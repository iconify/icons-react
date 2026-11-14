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
		"content": `<style>.bat5k3f1d {
  d: path("m11 2.5l-2 4l3 3l-2.5 4m6 3.5v3.25m3-5.75v7.25m3-5.25v4.25");
}

.efntd0d2o {
  d: path("M12.7 19H2.5V2.5H19v9.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="efntd0d2o"/><path class="bat5k3f1d"/></g>`,
		"fallback": "uix-sharp:glass-break-sensor",
	});
}

export default Component;
