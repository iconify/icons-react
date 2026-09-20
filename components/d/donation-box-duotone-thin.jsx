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

.eu-4h9m2f {
  fill: currentColor;
  d: path("M12 16c-2 -1.5 -4 -3 -3 -4.5 0.7 -1 2 -0.5 3 0.5 1 -1 2.3 -1.5 3 -0.5 1 1.5 -1 3 -3 4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h67kvlt_n {
  d: path("M12 16c-2 -1.5 -4 -3 -3 -4.5 0.7 -1 2 -0.5 3 0.5 1 -1 2.3 -1.5 3 -0.5 1 1.5 -1 3 -3 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.vrecxx6kh {
  d: path("M9 6h6");
}
</style><g class="hntgybcog"><path class="eu-4h9m2f"/><path class="em8xf33qp"/><path class="rw6ho_bav"/><path class="vrecxx6kh"/><path class="h67kvlt_n"/></g>`,
		"fallback": "iconmind:donation-box-duotone-thin",
	});
}

export default Component;
