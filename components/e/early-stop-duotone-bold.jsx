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
		"content": `<style>.fgef0hcge {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gh1l41bbm {
  d: path("m3 5 6 6h4l3 3");
}

.i7nok491l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 5 6 6h4l3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t3rq50btb {
  d: path("M19 4v16");
}
</style><g class="s0phu2bbs"><path class="i7nok491l"/><path class="fgef0hcge"/><path class="gh1l41bbm"/><path class="t3rq50btb"/></g>`,
		"fallback": "iconmind:early-stop-duotone-bold",
	});
}

export default Component;
