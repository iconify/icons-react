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

.as_t-2b1e {
  fill: currentColor;
  d: path("M9 12h3l3 3 -3 3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ilth2b2qd {
  d: path("M9 12h3l3 3 -3 3H9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yxow7abeb"/><path class="as_t-2b1e"/><path class="abnm6smsv"/><path class="pty_wsbvs"/><path class="ilth2b2qd"/></g>`,
		"fallback": "iconmind:chunk-metadata-duotone-regular",
	});
}

export default Component;
