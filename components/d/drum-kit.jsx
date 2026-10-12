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
		"content": `<style>.cd773pbcz {
  width: 6.5px;
  height: 3.5px;
  x: 4.25px;
  y: 2.75px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ld7nlxb7r {
  cx: 10px;
  cy: 15.25px;
  r: 2.5px;
}

.n8f0zab7q {
  d: path("M18.75 5.75v15.5m-2.5-15.5h5");
}

.w47qa_byy {
  cx: 10px;
  cy: 15.25px;
  r: 6px;
}
</style><g class="hntgybcog"><circle class="w47qa_byy"/><circle class="ld7nlxb7r"/><rect class="cd773pbcz"/><path class="n8f0zab7q"/></g>`,
		"fallback": "iconoven:drum-kit",
	});
}

export default Component;
