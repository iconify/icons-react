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
		"content": `<style>.malleql-h {
  width: 17.415px;
  height: 9.307px;
  x: 14.665px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.nr15-kblk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.08 9.897h6.764a3 3 0 0 1 3 3V39.5a3 3 0 0 1-3 3H9.157a3 3 0 0 1-3-3V12.897a3 3 0 0 1 3-3h5.507");
}

.yvf78tbvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.981 26.455h13.076");
}
</style><path class="nr15-kblk"/><rect class="malleql-h"/><path class="yvf78tbvz"/>`,
		"fallback": "arcticons:huawei-notepad",
	});
}

export default Component;
