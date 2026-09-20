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
		"content": `<style>.khzxabbpm {
  d: path("M15 21v-8a2.5 2.5 0 0 1 5 0v8Z");
}

.nwsr3kbjq {
  d: path("M6 17h6");
}

.orx4wjbhb {
  d: path("M15 18h5");
}

.px5-9pj7g {
  d: path("M6 21V10a3 3 0 0 1 6 0v11Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="px5-9pj7g"/><path class="khzxabbpm"/><path class="nwsr3kbjq"/><path class="orx4wjbhb"/></g>`,
		"fallback": "iconmind:gloves-outline-bold",
	});
}

export default Component;
