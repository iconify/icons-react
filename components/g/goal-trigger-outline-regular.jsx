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
		"content": `<style>.el687jbox {
  d: path("m15 6 -3 3h2.5l-3 3");
}

.hspeesv2z {
  d: path("M5.5 3v5.5a6.5 6.5 0 0 0 13 0V3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tv6hbrcra {
  d: path("M8.5 20.5h7");
}

.ujt25lh2u {
  d: path("M12 15v5.5");
}
</style><g class="nrj6p8qat"><path class="hspeesv2z"/><path class="ujt25lh2u"/><path class="tv6hbrcra"/><path class="el687jbox"/></g>`,
		"fallback": "iconmind:goal-trigger-outline-regular",
	});
}

export default Component;
