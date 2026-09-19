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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dxucw4hqz {
  cx: 18.154px;
  cy: 32.507px;
  r: 7.493px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w_yto3dop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.647 32.507V8c10.281 0 14.292 9.266 13.62 14.187c-6.004-4.09-13.62-2.8-13.62-2.8");
}
</style><circle class="cpk0fnbgt"/><circle class="dxucw4hqz"/><path class="w_yto3dop"/>`,
		"fallback": "arcticons:colorfulstage",
	});
}

export default Component;
