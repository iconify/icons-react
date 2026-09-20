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
		"content": `<style>.csyuhrrop {
  d: path("M5 14V3h14v11");
}

.gr1zxddav {
  d: path("M9 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hgjyjobhk {
  d: path("M12 7v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nreq_9ofo {
  d: path("M2 11v10h20V11L12 21Z");
}
</style><g class="hntgybcog"><path class="nreq_9ofo"/><path class="csyuhrrop"/><path class="gr1zxddav"/><path class="hgjyjobhk"/></g>`,
		"fallback": "iconmind:budget-envelope-outline-thin",
	});
}

export default Component;
