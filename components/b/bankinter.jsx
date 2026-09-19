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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.jw2vedtuq {
  cx: 36.488px;
  cy: 31.076px;
  r: 0.75px;
  fill: currentColor;
}

.ykw_l1b4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.75 16.674v14.424m0-3.063l6.479-6.499m-4.408 4.431l5.069 5.109m-19.628-5.928c0-1.992 1.598-3.606 3.57-3.606s3.57 1.614 3.57 3.606v2.344c0 1.992-1.598 3.606-3.57 3.606s-3.57-1.614-3.57-3.606m0 3.606V16.674");
}
</style><rect class="j3s9ivbxi"/><path class="ykw_l1b4l"/><circle class="jw2vedtuq"/>`,
		"fallback": "arcticons:bankinter",
	});
}

export default Component;
