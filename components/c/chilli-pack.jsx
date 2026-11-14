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
		"content": `<style>.bq1k7i-bv {
  d: path("M16 7.5c4 2 3.5 7-1 10.5c-3.5 2.75-8 3.5-11.5 3c4-1.5 7-4.5 8-9c.75-3 2.5-4.5 4.5-4.5");
}

.f-61yubuh {
  d: path("M16 7.5q.5-3.25 3.5-5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pvz-3bcvu {
  d: path("M12.25 9.5Q15.5 6 19 9.25");
}
</style><g class="hntgybcog"><path class="bq1k7i-bv"/><path class="pvz-3bcvu"/><path class="f-61yubuh"/></g>`,
		"fallback": "uix:chilli-pack",
	});
}

export default Component;
