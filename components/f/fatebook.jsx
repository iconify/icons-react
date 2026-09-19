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
		"content": `<style>.bmedoqb9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.167 4.5v39M31.583 5.042v8.125m4.334-8.125v8.125m-4.334 0L33.75 11l2.167 2.167");
}

.gqqk3rb7u {
  width: 30.333px;
  height: 39px;
  x: 8.833px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.nuv9dtbnd {
  cx: 21.833px;
  cy: 19.667px;
  r: 2.167px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.oow4e4xlt {
  cx: 28.333px;
  cy: 28.333px;
  r: 2.167px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rr_72hsof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.5 17.5l-10.833 13");
}
</style><rect class="gqqk3rb7u"/><path class="bmedoqb9s"/><circle class="nuv9dtbnd"/><circle class="oow4e4xlt"/><path class="rr_72hsof"/>`,
		"fallback": "arcticons:fatebook",
	});
}

export default Component;
