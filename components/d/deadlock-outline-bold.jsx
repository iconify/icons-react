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
		"content": `<style>.a1z8vac9r {
  d: path("M17.5 16H22");
}

.bqqmp9bon {
  d: path("M6.5 5.5 9 8l-2.5 2.5");
}

.rncaisbya {
  d: path("M2 8h4.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yzk-0x3pl {
  d: path("M17.5 13.5 15 16l2.5 2.5");
}
</style><g class="s0phu2bbs"><path class="rncaisbya"/><path class="bqqmp9bon"/><path class="a1z8vac9r"/><path class="yzk-0x3pl"/></g>`,
		"fallback": "iconmind:deadlock-outline-bold",
	});
}

export default Component;
