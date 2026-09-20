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
		"content": `<style>.hk697hhuu {
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
}

.jms1xqp8l {
  d: path("M9 3h6");
}

.kc811hbmp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 3h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nu4ml-bmq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 3v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.osxdm7bac {
  d: path("m16 10 -4 4h3.5l-4 4");
}

.rq77ywb_t {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wq8oy2ftj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 10 -4 4h3.5l-4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="s0phu2bbs"><path class="rq77ywb_t"/><path class="nu4ml-bmq"/><path class="kc811hbmp"/><path class="wq8oy2ftj"/><path class="hk697hhuu"/><path class="yazo7scbq"/><path class="jms1xqp8l"/><path class="osxdm7bac"/></g>`,
		"fallback": "iconmind:instant-duotone-bold",
	});
}

export default Component;
