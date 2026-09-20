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

.abtetbcpu {
  d: path("M9 10.5v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l517yxbln {
  d: path("M12 9v6");
}

.mcqe8sbtu {
  d: path("M15 10.5v3");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="abtetbcpu"/><path class="l517yxbln"/><path class="mcqe8sbtu"/></g>`,
		"fallback": "iconmind:document-audio-outline-thin",
	});
}

export default Component;
