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
		"content": `<style>.dkm3uebmr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 12h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j-bg0m85s {
  d: path("M12 14.5V19");
}

.lidpj44ik {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 5v4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lufov5rei {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 5v4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.th8j40bfn {
  d: path("M18 5v4.5");
}

.ugztwkaee {
  d: path("M6 5v4.5");
}

.voffilbdu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 14.5V19");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="s0phu2bbs"><path class="dkm3uebmr"/><path class="lufov5rei"/><path class="voffilbdu"/><path class="lidpj44ik"/><path class="x26a8iq1c"/><path class="ugztwkaee"/><path class="j-bg0m85s"/><path class="th8j40bfn"/></g>`,
		"fallback": "iconmind:event-bus-duotone-bold",
	});
}

export default Component;
