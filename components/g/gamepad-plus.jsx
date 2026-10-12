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
		"content": `<style>.j9i9we_6n {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.25 11.75h.01m2.49-2h.01");
}

.mmct_6bep {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 6.25h9.5a4 4 0 0 1 3.95 3.4l.3 5.6a2.5 2.5 0 0 1-4.1 2L15 15H9l-1.9 2.25a2.5 2.5 0 0 1-4.1-2l.3-5.6a4 4 0 0 1 3.95-3.4m-1 4.5h3m-1.5-1.5v3");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="mmct_6bep"/><path class="j9i9we_6n"/></g>`,
		"fallback": "iconoven:gamepad-plus",
	});
}

export default Component;
