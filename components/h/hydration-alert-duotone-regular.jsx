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
		"content": `<style>.ha190wb6v {
  d: path("M10 8V4h4v4");
}

.i_bq1yb3z {
  d: path("M8 8v12h8V8Z");
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qx2ceclwf {
  fill: currentColor;
  d: path("M8 8v12h8V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="qx2ceclwf"/><path class="i_bq1yb3z"/><path class="ha190wb6v"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:hydration-alert-duotone-regular",
	});
}

export default Component;
