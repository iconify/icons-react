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
		"content": `<style>.at7ws5bbl {
  d: path("M9.5 12h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.js578gb4i {
  d: path("M9.5 16h5");
}

.qmakhcstn {
  d: path("M9.5 3a2.5 2.5 0 0 1 5 0v2.5a2.5 2.5 0 0 1 -5 0Z");
}

.rgjkvwbqj {
  d: path("M7 8h10v13H7Z");
}
</style><g class="hntgybcog"><path class="qmakhcstn"/><path class="rgjkvwbqj"/><path class="at7ws5bbl"/><path class="js578gb4i"/></g>`,
		"fallback": "iconmind:do-not-disturb-outline-thin",
	});
}

export default Component;
