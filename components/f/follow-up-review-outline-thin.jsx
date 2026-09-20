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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.ayfcapvsy {
  d: path("M9 13a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.b8bgvry1b {
  d: path("M12 13h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xios20bld {
  d: path("M12 10v3");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="ayfcapvsy"/><path class="xios20bld"/><path class="b8bgvry1b"/></g>`,
		"fallback": "iconmind:follow-up-review-outline-thin",
	});
}

export default Component;
