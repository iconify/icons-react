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
		"content": `<style>.fk2t6wttr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.794 33.808L24 23.23l14.206 10.576");
}

.mbc5-pbdm {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 16.177px;
  ry: 20.5px;
}

.xj46vxb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.919 26.227L24 14.254l16.082 11.973");
}
</style><ellipse class="mbc5-pbdm"/><path class="xj46vxb9a"/><path class="fk2t6wttr"/>`,
		"fallback": "arcticons:citroen",
	});
}

export default Component;
