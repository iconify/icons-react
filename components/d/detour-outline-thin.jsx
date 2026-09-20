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
		"content": `<style>.a-ogebbgz {
  d: path("M12 7v9");
}

.e2evtpg8i {
  d: path("M9.5 9.5 12 7l2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hv2_9fjhy {
  d: path("m20 13 -4 4");
}

.q4rhaacat {
  d: path("m16 13 4 4");
}

.vhfgw5-us {
  d: path("M2 16h10");
}
</style><g class="hntgybcog"><path class="vhfgw5-us"/><path class="a-ogebbgz"/><path class="e2evtpg8i"/><path class="q4rhaacat"/><path class="hv2_9fjhy"/></g>`,
		"fallback": "iconmind:detour-outline-thin",
	});
}

export default Component;
