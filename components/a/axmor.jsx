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
		"content": `<style>.bfs6q6api {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.509 15.465l1.516 1.268a6.83 6.83 0 0 1 2.447 5.237v12.123a8.407 8.407 0 0 1-8.407 8.407h-20.13a8.407 8.407 0 0 1-8.407-8.407V22.016c0-2.048.92-3.989 2.506-5.285L19.93 7.01a6.69 6.69 0 0 1 8.522.048l6.128 5.124V6.92");
}

.fh-pg7f6b {
  cx: 20.796px;
  cy: 22.097px;
  r: 1.909px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n4o_l7xur {
  cx: 27.82px;
  cy: 22.097px;
  r: 1.909px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.or8thcb5q {
  cx: 20.796px;
  cy: 29.154px;
  r: 1.909px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x7hay9gex {
  cx: 27.82px;
  cy: 29.154px;
  r: 1.909px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="bfs6q6api"/><circle class="fh-pg7f6b"/><circle class="n4o_l7xur"/><circle class="or8thcb5q"/><circle class="x7hay9gex"/>`,
		"fallback": "arcticons:axmor",
	});
}

export default Component;
