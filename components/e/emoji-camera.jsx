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
		"content": `<style>.f2hftmbqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 15.152h-8.245l-3.217-7.239H16.962l-3.217 7.239H5.5v24.935h37z");
}

.tqjakabfx {
  cx: 24px;
  cy: 26.011px;
  r: 8.043px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="tqjakabfx"/><path class="f2hftmbqx"/>`,
		"fallback": "arcticons:emoji-camera",
	});
}

export default Component;
