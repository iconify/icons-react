import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c487shz7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.796 21.802a6 6 0 0 1-11.591 0");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i64-56u1q {
  cx: 21px;
  cy: 18.499px;
  r: 0.75px;
  fill: currentColor;
}

.k1ialnbuv {
  cx: 27px;
  cy: 18.499px;
  r: 0.75px;
  fill: currentColor;
}

.wvl0fd9vh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 25h-7.509c-5.844 0-8.55 2.09-10.99 3.5c-1.299.748-2.657.75-3 .75s-1.703-.002-3-.75C18.56 27.09 15.852 25 10.008 25H2.523M21 28.5v16.605M27 28.5v16.605");
}

.zd-7dff8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.009 25.001A14 14 0 0 1 10 24.5c0-7.732 6.268-14 14-14h0c7.732 0 14 6.268 14 14h0q0 .25-.009.501");
}
</style><circle class="cpk0fnbgt"/><path class="zd-7dff8b"/><path class="c487shz7j"/><circle class="i64-56u1q"/><circle class="k1ialnbuv"/><path class="wvl0fd9vh"/>`,
		"fallback": "arcticons:bookoff",
	});
}

export default Component;
