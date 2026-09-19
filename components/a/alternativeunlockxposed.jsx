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
		"content": `<style>.bnyrx3wdl {
  d: path("m34 33.993l2.68 2.683m-2.684-22.669l2.683-2.68");
}

.brxpxfbzn {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  rx: 4px;
  ry: 4px;
}

.i74ae81rc {
  cx: 24px;
  cy: 24px;
  r: 9.991px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yhfg1ynjv {
  d: path("m20.108 23.81l3.127 2.677l4.658-4.974M11.32 36.666l2.682-2.68m-2.673-22.662l2.68 2.683");
}
</style><g class="y9tr6bcfx"><path class="bnyrx3wdl"/><rect class="brxpxfbzn"/><circle class="i74ae81rc"/><path class="yhfg1ynjv"/></g>`,
		"fallback": "arcticons:alternativeunlockxposed",
	});
}

export default Component;
