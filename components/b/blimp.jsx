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
		"content": `<style>.dwfzb696r {
  d: path("M12.75 5c4.7 0 8.5 2.24 8.5 5s-3.8 5-8.5 5s-8.5-2.24-8.5-5s3.8-5 8.5-5m-1.5 9.85v2.65m3.5-2.65v2.65");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mfed9se9b {
  width: 5.5px;
  height: 3px;
  x: 10.25px;
  y: 17.5px;
  rx: 1px;
}

.vogw5ubbe {
  d: path("M3.5 4.25zq.75 0 1.3.51l2.15 1.98q.55.51.55 1.26v4q0 .75-.55 1.26L4.8 15.24q-.55.51-1.3.51T2.75 15V5q0-.75.75-.75");
}
</style><g class="hntgybcog"><path class="vogw5ubbe"/><path class="dwfzb696r"/><rect class="mfed9se9b"/></g>`,
		"fallback": "iconoven:blimp",
	});
}

export default Component;
