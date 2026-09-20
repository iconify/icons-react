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

.l79he__ih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.492 20.526v6.404m7.008-2.417a2.417 2.417 0 1 1-4.833 0v-1.57a2.417 2.417 0 1 1 4.833 0m0 3.987v-6.404m-9.667 0l-2.416 6.404L24 20.526");
}

.nsywxfbta {
  cx: 31.501px;
  cy: 17.611px;
  r: 0.75px;
  fill: currentColor;
}

.x4h2xy6cc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.333 24.513a2.417 2.417 0 1 1-4.833 0v-1.57a2.417 2.417 0 1 1 4.833 0m0 3.987v-6.404m7.25 2.417a2.417 2.417 0 1 0-4.833 0v1.57a2.417 2.417 0 1 0 4.833 0m0 2.417v-9.667");
}
</style><path class="x4h2xy6cc"/><circle class="nsywxfbta"/><path class="l79he__ih"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:advia",
	});
}

export default Component;
