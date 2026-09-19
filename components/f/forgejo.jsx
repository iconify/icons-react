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
		"content": `<style>.dm3mktb_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.633 35.858V17.676c0-4.216 3.218-9.355 8.696-9.355h4.216");
}

.kgghw1byj {
  cx: 32.367px;
  cy: 8.321px;
  r: 3.821px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kx5zdc-sq {
  cx: 15.633px;
  cy: 39.679px;
  r: 3.821px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.roobvnbmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.633 35.858v-5.534c0-4.48 3.426-8.96 8.696-8.96h4.216");
}

.t9vx7hs-u {
  cx: 32.367px;
  cy: 21.365px;
  r: 3.821px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="dm3mktb_j"/><path class="roobvnbmn"/><circle class="kgghw1byj"/><circle class="t9vx7hs-u"/><circle class="kx5zdc-sq"/>`,
		"fallback": "arcticons:forgejo",
	});
}

export default Component;
