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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.inbmhyb_c {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 9v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l2bljsbmn {
  d: path("M12 9v11");
}

.onnaw4bkb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 9v11h16V9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.s7xlnnb_i {
  d: path("M12 9 8 5h4");
}

.w062c-lvc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 9 8 5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x4r46rbgt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 9h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="onnaw4bkb"/><path class="x4r46rbgt"/><path class="inbmhyb_c"/><path class="w062c-lvc"/><path class="em8xf33qp"/><path class="rw6ho_bav"/><path class="l2bljsbmn"/><path class="s7xlnnb_i"/></g>`,
		"fallback": "iconmind:gift-box-duotone-thin",
	});
}

export default Component;
