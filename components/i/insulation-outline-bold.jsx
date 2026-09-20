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
		"content": `<style>.kq_o6ubcg {
  d: path("M4 4v16h6V4Z");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s7eyaw7qq {
  d: path("M15 4v16");
}

.tkeq0bpvv {
  d: path("M18 4v16");
}
</style><g class="s0phu2bbs"><path class="kq_o6ubcg"/><path class="r7xk8o29f"/><path class="s7eyaw7qq"/><path class="tkeq0bpvv"/></g>`,
		"fallback": "iconmind:insulation-outline-bold",
	});
}

export default Component;
