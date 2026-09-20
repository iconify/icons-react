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
		"content": `<style>.g7akhoeoj {
  d: path("m6 13 6 -6 6 6");
}

.i2-ny_bzf {
  d: path("M12 3v4");
}

.jyg-5ub3c {
  d: path("M8 13v5h8v-5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wtnr1t2-w {
  d: path("M9 21h6");
}
</style><g class="s0phu2bbs"><path class="i2-ny_bzf"/><path class="g7akhoeoj"/><path class="jyg-5ub3c"/><path class="wtnr1t2-w"/></g>`,
		"fallback": "iconmind:bird-feeder-outline-bold",
	});
}

export default Component;
