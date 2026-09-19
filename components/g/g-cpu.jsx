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
		"content": `<style>.jpwtw252a {
  cx: 30.082px;
  cy: 23.76px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.853px;
  ry: 3.849px;
}

.ov_vudbvg {
  cx: 30.082px;
  cy: 23.76px;
  r: 1.445px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w_um1t0la {
  cx: 30.082px;
  cy: 23.76px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.706px;
  ry: 7.698px;
}

.xo74o8bnw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 24h-5.703m-16.25-10.484H16.05m1.678 4.934h-7.623M16.53 24H4.5m9.966 5.263H8.674m12.517 4.917h-8.957");
}

.z40gfew_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 24a13.47 13.47 0 0 1-9.711 12.933a13.49 13.49 0 0 1-15.147-5.695c-3.22-5.05-2.717-11.618 1.235-16.12S30.282 9.26 35.714 11.79");
}
</style><path class="z40gfew_s"/><ellipse class="w_um1t0la"/><ellipse class="jpwtw252a"/><circle class="ov_vudbvg"/><path class="xo74o8bnw"/>`,
		"fallback": "arcticons:g-cpu",
	});
}

export default Component;
