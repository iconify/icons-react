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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n92hyrp1a {
  d: path("M9 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.on0zajbot {
  d: path("M7 17a5 5 0 0 1 10 0");
}

.pmt-nxb9a {
  fill: currentColor;
  d: path("M9 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qik8460ao {
  d: path("M5 21h14");
}
</style><g class="hntgybcog"><path class="pmt-nxb9a"/><path class="n92hyrp1a"/><path class="on0zajbot"/><path class="qik8460ao"/></g>`,
		"fallback": "iconmind:individual-duotone-thin",
	});
}

export default Component;
