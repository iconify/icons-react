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

.dmx-x9boq {
  d: path("M14 9.5a2.5 2.5 0 0 1 0 5");
}

.j8p3ujb4c {
  d: path("M10 14.5a2.5 2.5 0 0 1 0 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="yxow7abeb"/><path class="abnm6smsv"/><path class="j8p3ujb4c"/><path class="dmx-x9boq"/></g>`,
		"fallback": "iconmind:document-json-duotone-bold",
	});
}

export default Component;
