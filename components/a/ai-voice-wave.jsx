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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uhriy3b5t {
  d: path("M8 10.5v3m8-3v3M10.67 8v8m2.66-6.75v5.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="uhriy3b5t"/></g>`,
		"fallback": "iconoven:ai-voice-wave",
	});
}

export default Component;
