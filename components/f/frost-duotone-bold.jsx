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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.d-_x6ccub {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 9v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dgfbh6b4z {
  d: path("M12 9v9");
}

.l7-6ovvzu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 7.5v7m-3.5 0 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nhpfz0btj {
  d: path("M17 7.5v7m-3.5 0 7 -7");
}

.rbmqb921v {
  d: path("M7 7.5v7m-3.5 0 7 -7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vf6v1_8ra {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 7.5v7m-3.5 0 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xa9vorq4l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 18h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="xa9vorq4l"/><path class="vf6v1_8ra"/><path class="l7-6ovvzu"/><path class="d-_x6ccub"/><path class="bod4n0b3z"/><path class="rbmqb921v"/><path class="nhpfz0btj"/><path class="dgfbh6b4z"/></g>`,
		"fallback": "iconmind:frost-duotone-bold",
	});
}

export default Component;
