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
		"content": `<style>.b7e9ovb-o {
  d: path("M15 21h5");
}

.m7ezp3bui {
  d: path("M4 15a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 6a5.5 5.5 0 0 1 4.5 9Z");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xa4pttbib {
  d: path("M4 21h8");
}
</style><g class="s0phu2bbs"><path class="m7ezp3bui"/><path class="o8od38cnm"/><path class="xa4pttbib"/><path class="b7e9ovb-o"/></g>`,
		"fallback": "iconmind:firewall-cloud-outline-bold",
	});
}

export default Component;
