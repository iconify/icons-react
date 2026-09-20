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
		"content": `<style>.gnvc2jbpq {
  d: path("M12 10c3 0 5 -2 5 -5 -3 0 -5 2 -5 5");
}

.h7bcztycq {
  d: path("M12 8v8");
}

.ldl0azwpx {
  fill: currentColor;
  d: path("M9 16v5h6v-5Z");
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

.s9miuis1i {
  fill: currentColor;
  d: path("M12 10c3 0 5 -2 5 -5 -3 0 -5 2 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y92rdcc_s {
  d: path("M9 16v5h6v-5Z");
}

.zca9n5m2v {
  fill: currentColor;
  d: path("M12 12c-3 0 -5 -2 -5 -5 3 0 5 2 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zdy8cdcdt {
  d: path("M12 12c-3 0 -5 -2 -5 -5 3 0 5 2 5 5");
}
</style><g class="s0phu2bbs"><path class="ldl0azwpx"/><path class="zca9n5m2v"/><path class="s9miuis1i"/><path class="y92rdcc_s"/><path class="h7bcztycq"/><path class="zdy8cdcdt"/><path class="gnvc2jbpq"/></g>`,
		"fallback": "iconmind:indoor-plant-duotone-bold",
	});
}

export default Component;
