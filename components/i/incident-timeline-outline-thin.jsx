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
		"content": `<style>.a5a5iacnl {
  d: path("M15 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.ux6apgnet {
  d: path("M7 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.w_jkatblo {
  d: path("M12 7v10");
}
</style><g class="hntgybcog"><path class="iaozfqbuj"/><path class="w_jkatblo"/><path class="ux6apgnet"/><path class="a5a5iacnl"/></g>`,
		"fallback": "iconmind:incident-timeline-outline-thin",
	});
}

export default Component;
