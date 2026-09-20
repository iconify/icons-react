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
		"content": `<style>.b0hkzgbgd {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.elc06ob4j {
  d: path("M8 8h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wuk2mlziz {
  d: path("M7 19h10");
}

.zawirs49s {
  d: path("M8 11h6");
}
</style><g class="s0phu2bbs"><path class="b0hkzgbgd"/><path class="wuk2mlziz"/><path class="elc06ob4j"/><path class="zawirs49s"/></g>`,
		"fallback": "iconmind:build-log-outline-bold",
	});
}

export default Component;
