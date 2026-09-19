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
		"content": `<style>.bq084-n4x {
  cx: 40.021px;
  cy: 29.381px;
  r: 2.291px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jgfue25fp {
  cx: 7.979px;
  cy: 40.209px;
  r: 2.291px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nptltxclz {
  cx: 25.701px;
  cy: 7.791px;
  r: 2.291px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qle6clb5j {
  cx: 12.184px;
  cy: 19.704px;
  r: 2.291px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sggqn2r5h {
  cx: 33.72px;
  cy: 35.397px;
  r: 2.291px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uxwooxbmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.7 21.943L8.493 37.976m5.357-16.699l4.806 5.557m2.199-.506l4.302-16.312m1.541-.162l6.475 23.318m2.349.81l2.995-2.874");
}

.vcb9bebpc {
  cx: 20.203px;
  cy: 28.524px;
  r: 2.291px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="qle6clb5j"/><circle class="vcb9bebpc"/><circle class="nptltxclz"/><circle class="sggqn2r5h"/><circle class="bq084-n4x"/><circle class="jgfue25fp"/><path class="uxwooxbmy"/>`,
		"fallback": "arcticons:gpxsee",
	});
}

export default Component;
