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
		"content": `<style>.lgpqm10qc {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 2 2 0 0 0 0;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.205 20.267l.038 7.433h22.2V6.557h-9.514V20.3z");
}

.looe_qk3u {
  cx: 23.471px;
  cy: 36.686px;
  r: 4.757px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pczjmzbmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.675 24L8.94 25.734zm8.045 12.686h-8.045V24m0 0l1.742 1.742");
}

.su7osw77m {
  cx: 10.786px;
  cy: 11.843px;
  r: 3.171px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xioah45oj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.957 11.843h9.514M17.129 5.5v37m12.685-37v37M42.5 18.186h-37m37 11.628h-37m27.486 3.172h7.4v7.4h-7.4z");
}
</style><path class="lgpqm10qc"/><circle class="su7osw77m"/><path class="xioah45oj"/><circle class="looe_qk3u"/><path class="pczjmzbmg"/>`,
		"fallback": "arcticons:cracking-the-cryptic",
	});
}

export default Component;
