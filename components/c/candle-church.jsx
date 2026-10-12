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
		"content": `<style>.bs99rab-u {
  d: path("M12 2.75C13.25 4 14 5 14 6a2 2 0 0 1-4 0c0-1 .75-2 2-3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.idf8m8x4y {
  d: path("M12 13.75v5m-2-3h4");
}

.uy9sd2abu {
  width: 8.5px;
  height: 10.25px;
  x: 7.75px;
  y: 11px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="bs99rab-u"/><rect class="uy9sd2abu"/><path class="idf8m8x4y"/></g>`,
		"fallback": "iconoven:candle-church",
	});
}

export default Component;
