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
		"content": `<style>.ex3d3k3tz {
  width: 12.5px;
  height: 14.5px;
  x: 8.75px;
  y: 4.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lfem3dbxp {
  d: path("M18 12a3 3 0 1 1-6 0a3 3 0 1 1 6 0");
}

.no7nyt1_c {
  d: path("M2.75 8.75v6.5m3-8.5v10.5");
}
</style><g class="hntgybcog"><path class="no7nyt1_c"/><rect class="ex3d3k3tz"/><path class="lfem3dbxp"/></g>`,
		"fallback": "iconoven:burst-mode",
	});
}

export default Component;
