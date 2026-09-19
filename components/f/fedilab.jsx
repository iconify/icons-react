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
		"content": `<style>.av0liibrl {
  cx: 36.3px;
  cy: 17.54px;
  r: 3.74px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ed4r10rvu {
  cx: 27.3px;
  cy: 19.78px;
  r: 15.07px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k6-nj6bay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.01 17.98l2.27.15m-13.04-1.24l3.32.38m-11.05 3.58l-6.93 11.78m3.24-5.51l5.75.29");
}

.k7ubq_b7u {
  cx: 27.3px;
  cy: 27.61px;
  r: 3.74px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l34rggzpw {
  cx: 24.17px;
  cy: 16.54px;
  r: 5.07px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uujkt9azz {
  cx: 11.42px;
  cy: 37.49px;
  r: 5.8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ed4r10rvu"/><circle class="k7ubq_b7u"/><circle class="av0liibrl"/><circle class="l34rggzpw"/><circle class="uujkt9azz"/><path class="k6-nj6bay"/>`,
		"fallback": "arcticons:fedilab",
	});
}

export default Component;
