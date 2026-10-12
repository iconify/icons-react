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
		"content": `<style>.eid-g7b9r {
  d: path("M12 12.5c.75.95 1.25 1.7 1.25 2.5a1.25 1.25 0 0 1-2.5 0c0-.8.5-1.55 1.25-2.5m-5.25 8.75h10.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lfmpahb4g {
  d: path("M12 5V2.75M7.75 9c0-2.25 1.9-4 4.25-4s4.25 1.75 4.25 4m-9 1.5h9.5q.75 0 .64.74l-1.03 6.77q-.11.74-.86.74h-7q-.75 0-.86-.74l-1.03-6.77q-.11-.74.64-.74");
}
</style><g class="hntgybcog"><path class="lfmpahb4g"/><path class="eid-g7b9r"/></g>`,
		"fallback": "iconoven:funeral-candle",
	});
}

export default Component;
