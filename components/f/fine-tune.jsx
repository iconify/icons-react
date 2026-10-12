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
		"content": `<style>.g-sltrb1p {
  d: path("M10 2.75q.87 6.38 7.25 7.25q-6.38.87-7.25 7.25q-.87-6.38-7.25-7.25Q9.13 9.13 10 2.75m3.5 16.5h2m3.5 0h2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l5-xbobjq {
  cx: 17.25px;
  cy: 19.25px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="g-sltrb1p"/><circle class="l5-xbobjq"/></g>`,
		"fallback": "iconoven:fine-tune",
	});
}

export default Component;
