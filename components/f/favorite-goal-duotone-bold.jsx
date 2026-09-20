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
		"content": `<style>.amxt1tj6l {
  fill: currentColor;
  d: path("M9 9a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hspeesv2z {
  d: path("M5.5 3v5.5a6.5 6.5 0 0 0 13 0V3");
}

.i2xpf9x8l {
  d: path("M9 9a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tv6hbrcra {
  d: path("M8.5 20.5h7");
}

.ujt25lh2u {
  d: path("M12 15v5.5");
}
</style><g class="s0phu2bbs"><path class="amxt1tj6l"/><path class="hspeesv2z"/><path class="ujt25lh2u"/><path class="tv6hbrcra"/><path class="i2xpf9x8l"/></g>`,
		"fallback": "iconmind:favorite-goal-duotone-bold",
	});
}

export default Component;
