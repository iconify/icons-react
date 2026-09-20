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
		"content": `<style>.gcalxb98a {
  d: path("M8 13h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kburqr_hv {
  d: path("M8 4h8v13h4v4H8Z");
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.q6zj4iekt {
  fill: currentColor;
  d: path("M8 4h8v13h4v4H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="q6zj4iekt"/><path class="kburqr_hv"/><path class="pty_wsbvs"/><path class="gcalxb98a"/></g>`,
		"fallback": "iconmind:cast-duotone-thin",
	});
}

export default Component;
