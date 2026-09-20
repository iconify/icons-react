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

.blpv4t9it {
  d: path("M12 9h4");
}

.c4o3x9bhp {
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.h857n5bhq {
  d: path("M8 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t_sbvu3iq {
  d: path("M12 14h4");
}

.ulvbol07x {
  d: path("M8 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="c4o3x9bhp"/><path class="blpv4t9it"/><path class="h857n5bhq"/><path class="t_sbvu3iq"/><path class="ulvbol07x"/></g>`,
		"fallback": "iconmind:changelog-outline-thin",
	});
}

export default Component;
