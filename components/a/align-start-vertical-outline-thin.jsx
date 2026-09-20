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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q7xe92bpy {
  d: path("M7 7h10v4H7Z");
}

.w329m1boj {
  d: path("M7 14h6v4H7Z");
}
</style><g class="hntgybcog"><path class="crv4i00bu"/><path class="q7xe92bpy"/><path class="w329m1boj"/></g>`,
		"fallback": "iconmind:align-start-vertical-outline-thin",
	});
}

export default Component;
