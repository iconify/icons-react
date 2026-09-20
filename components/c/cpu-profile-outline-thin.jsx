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
		"content": `<style>.fkf_gcbra {
  d: path("M10 15h4");
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

.pty_wsbvs {
  d: path("M8 9h8");
}

.x1_r36phd {
  d: path("M9 12h6");
}
</style><g class="hntgybcog"><path class="iaozfqbuj"/><path class="pty_wsbvs"/><path class="x1_r36phd"/><path class="fkf_gcbra"/></g>`,
		"fallback": "iconmind:cpu-profile-outline-thin",
	});
}

export default Component;
