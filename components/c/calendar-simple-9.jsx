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
		"content": `<style>.rftf-kbbz {
  d: path("M19.26 34.025C20.05 35.21 21.431 36 23.604 36H24a5.31 5.31 0 0 0 5.333-5.333v-5.334");
}

.vc6gc3mgm {
  cx: 24px;
  cy: 25.333px;
  r: 5.333px;
}

.w5ztvbg7m {
  width: 35px;
  height: 36px;
  x: 6.5px;
  y: 7.5px;
  rx: 4px;
  ry: 4px;
}

.w9v12qzbx {
  d: path("M33.5 4.5v6m-19-6v6");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="vc6gc3mgm"/><path class="rftf-kbbz"/></g><g class="y9tr6bcfx"><rect class="w5ztvbg7m"/><path class="w9v12qzbx"/></g>`,
		"fallback": "arcticons:calendar-simple-9",
	});
}

export default Component;
