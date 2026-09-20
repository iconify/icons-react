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
		"content": `<style>.e6ozu7b8f {
  d: path("M5 15v5h14v-5Z");
}

.l517yxbln {
  d: path("M12 9v6");
}

.le41ikb_c {
  fill: currentColor;
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s_dzv3asd {
  fill: currentColor;
  d: path("M5 15v5h14v-5Z");
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
</style><g class="s0phu2bbs"><path class="le41ikb_c"/><path class="s_dzv3asd"/><path class="pemn838wn"/><path class="l517yxbln"/><path class="e6ozu7b8f"/></g>`,
		"fallback": "iconmind:arcade-joystick-duotone-bold",
	});
}

export default Component;
