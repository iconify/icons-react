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
		"content": `<style>.i1xkrt_rh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.219 13.8l15.645 9.374l15.918-9.19L23.864 4.5z");
}

.lym-8pzot {
  width: 8.565px;
  height: 8.565px;
  x: 13.476px;
  y: 30.044px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.664px;
  ry: 0.664px;
}

.t9dblbbyo {
  width: 8.565px;
  height: 8.565px;
  x: 25.941px;
  y: 34.935px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.664px;
  ry: 0.664px;
}
</style><path class="i1xkrt_rh"/><rect class="lym-8pzot"/><rect class="t9dblbbyo"/>`,
		"fallback": "arcticons:edge-roll",
	});
}

export default Component;
