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
		"content": `<style>.agks8bk0c {
  width: 11px;
  height: 2.5px;
  x: 6.5px;
  y: 18.75px;
  rx: 1.25px;
}

.fwc35obso {
  d: path("M12 2.75a8 8 0 0 1 8 8v3.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.5a8 8 0 0 1 8-8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r43cspcqi {
  width: 10px;
  height: 6px;
  x: 7px;
  y: 7.25px;
  rx: 3px;
}
</style><g class="hntgybcog"><path class="fwc35obso"/><rect class="r43cspcqi"/><rect class="agks8bk0c"/></g>`,
		"fallback": "iconoven:astronaut-helmet",
	});
}

export default Component;
