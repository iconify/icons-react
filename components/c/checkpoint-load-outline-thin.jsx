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
		"content": `<style>.c3wl0l-ou {
  d: path("M19 13v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hpd-e505b {
  d: path("M16.5 15.5 19 13l2.5 2.5");
}

.ni-_lk7vs {
  d: path("M5 5h10v6H5");
}

.ojq3d2bwe {
  d: path("M5 3v18");
}
</style><g class="hntgybcog"><path class="ojq3d2bwe"/><path class="ni-_lk7vs"/><path class="c3wl0l-ou"/><path class="hpd-e505b"/></g>`,
		"fallback": "iconmind:checkpoint-load-outline-thin",
	});
}

export default Component;
