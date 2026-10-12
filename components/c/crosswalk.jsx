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
		"content": `<style>.brk278bus {
  d: path("m12.45 6.6l-1.2 3.45l1.8 1.65v2.4m-1.8-4.05l-1.5 4.05m-.6-5.4l1.05-1.8l2.1-.3l1.35 1.8l1.65.6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jpj6svb4n {
  d: path("M4.5 16.75v4.5m3.75-4.5v4.5m3.75-4.5v4.5m3.75-4.5v4.5m3.75-4.5v4.5");
}

.u2vhcz6gc {
  cx: 12.9px;
  cy: 4.05px;
  r: 1.25px;
}
</style><g class="hntgybcog"><path class="jpj6svb4n"/><circle class="u2vhcz6gc"/><path class="brk278bus"/></g>`,
		"fallback": "iconoven:crosswalk",
	});
}

export default Component;
