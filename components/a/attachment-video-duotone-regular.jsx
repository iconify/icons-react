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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ud2t_yb3b {
  fill: currentColor;
  d: path("m10 8 5 5 -5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vd46v0bwd {
  d: path("m10 8 5 5 -5 5Z");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yxow7abeb"/><path class="ud2t_yb3b"/><path class="abnm6smsv"/><path class="vd46v0bwd"/></g>`,
		"fallback": "iconmind:attachment-video-duotone-regular",
	});
}

export default Component;
