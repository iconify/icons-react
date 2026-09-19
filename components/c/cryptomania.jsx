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
		"content": `<style>.s9ll3_bun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.37 34.75a21.5 21.5 0 1 1 0-21.5");
}

.v81cn1b-d {
  cx: 42.749px;
  cy: 24px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ylmgo4brd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.75 31.5v-9.34a5.66 5.66 0 0 0-11.321 0v9.34m11.321-9.34a5.66 5.66 0 1 1 11.32 0v9.34");
}
</style><path class="s9ll3_bun"/><circle class="v81cn1b-d"/><path class="ylmgo4brd"/>`,
		"fallback": "arcticons:cryptomania",
	});
}

export default Component;
