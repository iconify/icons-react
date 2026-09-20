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
		"content": `<style>.c7kjqqh8k {
  d: path("M7 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.f1a0i3x1x {
  d: path("M18 9v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgp2jybfi {
  d: path("M5.5 17a4.5 4.5 0 0 1 9 0");
}
</style><g class="hntgybcog"><path class="c7kjqqh8k"/><path class="jgp2jybfi"/><path class="f1a0i3x1x"/></g>`,
		"fallback": "iconmind:grandparent-outline-thin",
	});
}

export default Component;
