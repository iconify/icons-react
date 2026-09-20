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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.htfprqbon {
  d: path("M15 17v4l2 -2 2 2v-4");
}

.n8wwq96fg {
  d: path("M14 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.soorsrbax {
  d: path("M6 10h8");
}

.uxsptjbvt {
  d: path("M6 7h12");
}

.yxv11bcbk {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="yxv11bcbk"/><path class="uxsptjbvt"/><path class="soorsrbax"/><path class="n8wwq96fg"/><path class="htfprqbon"/></g>`,
		"fallback": "iconmind:course-certificate-outline-thin",
	});
}

export default Component;
