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
		"content": `<style>.jhq2fxlof {
  d: path("m3 15 6 -6h12l-6 6Z");
}

.rsvh7b0ab {
  d: path("M3 15v4h12l6 -6V9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uk_l5kxob {
  d: path("M9 9v4l-6 6");
}
</style><g class="s0phu2bbs"><path class="jhq2fxlof"/><path class="rsvh7b0ab"/><path class="uk_l5kxob"/></g>`,
		"fallback": "iconmind:eraser-outline-bold",
	});
}

export default Component;
