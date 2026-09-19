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
		"content": `<style>.dgvjne8gv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 30.5A6.5 6.5 0 1 0 24 37v-6.5zm13-13a6.5 6.5 0 1 0 0-13H24v13zm-13-13a6.5 6.5 0 1 0 0 13H24v-13zm0 13a6.5 6.5 0 1 0 0 13H24v-13z");
}

.oe8unhbgc {
  cx: 30.5px;
  cy: 24px;
  r: 6.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="oe8unhbgc"/><path class="dgvjne8gv"/>`,
		"fallback": "arcticons:figma",
	});
}

export default Component;
