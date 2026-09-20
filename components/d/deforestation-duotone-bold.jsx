import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mbfwr1vcs {
  d: path("M5 19v-5h6v5");
}

.pb1wrt76j {
  d: path("M15 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pldekmw0i {
  fill: currentColor;
  d: path("M15 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t-3b9ybzs {
  d: path("m12 18 6 -6");
}
</style><g class="s0phu2bbs"><path class="pldekmw0i"/><path class="mbfwr1vcs"/><path class="t-3b9ybzs"/><path class="pb1wrt76j"/></g>`,
		"fallback": "iconmind:deforestation-duotone-bold",
	});
}

export default Component;
