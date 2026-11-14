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
		"content": `<style>.fghzufttv {
  d: path("M3 19.75a9 9 0 0 1 18 0");
}

.fmdezkbii {
  d: path("M12 4.25a9 9 0 0 0 9 15.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j568z7b2h {
  d: path("M12 4.25a9 9 0 0 1-9 15.5");
}
</style><g class="hntgybcog"><path class="j568z7b2h"/><path class="fmdezkbii"/><path class="fghzufttv"/></g>`,
		"fallback": "uix:celtic-knot",
	});
}

export default Component;
