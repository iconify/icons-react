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

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vd46v0bwd {
  d: path("m10 8 5 5 -5 5Z");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="vd46v0bwd"/></g>`,
		"fallback": "iconmind:attachment-video-outline-bold",
	});
}

export default Component;
