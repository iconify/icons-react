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
		"content": `<style>.em8xf33qp {
  d: path("M4 9v11h16V9");
}

.l2bljsbmn {
  d: path("M12 9v11");
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s7xlnnb_i {
  d: path("M12 9 8 5h4");
}
</style><g class="s0phu2bbs"><path class="em8xf33qp"/><path class="rw6ho_bav"/><path class="l2bljsbmn"/><path class="s7xlnnb_i"/></g>`,
		"fallback": "iconmind:gift-box-outline-bold",
	});
}

export default Component;
