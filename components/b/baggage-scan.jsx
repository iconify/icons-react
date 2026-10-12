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
		"content": `<style>.gopj33bxe {
  width: 6px;
  height: 4.5px;
  x: 9px;
  y: 10.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i_e7gf8oq {
  d: path("M10.75 10.75V8h2.5v2.75");
}

.z5mysybdi {
  d: path("M5.75 15.25v-8.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v8.5m-15.5 0h18.5m-17.5 3.5h16.5");
}
</style><g class="hntgybcog"><path class="z5mysybdi"/><rect class="gopj33bxe"/><path class="i_e7gf8oq"/></g>`,
		"fallback": "iconoven:baggage-scan",
	});
}

export default Component;
