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
		"content": `<style>.e4g_5pjft {
  d: path("M7.5 13.5h3.25V15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ms_oer13v {
  width: 9px;
  height: 11px;
  x: 7.5px;
  y: 10.25px;
  rx: 1.5px;
}

.o55nx6b2x {
  d: path("M12 2.75c1.25 1.15 1.9 2.2 1.9 3.15a1.9 1.9 0 0 1-3.8 0c0-.95.65-2 1.9-3.15");
}
</style><g class="hntgybcog"><path class="o55nx6b2x"/><rect class="ms_oer13v"/><path class="e4g_5pjft"/></g>`,
		"fallback": "iconoven:candle",
	});
}

export default Component;
