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
		"content": `<style>.dqy0akhac {
  d: path("m16 16 4.5 4.5");
}

.if8unzboi {
  d: path("M3 5a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yvhspgbdy {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zuxjsnblj {
  d: path("M16.5 20.5h4v-4");
}
</style><g class="nrj6p8qat"><path class="yvhspgbdy"/><path class="if8unzboi"/><path class="dqy0akhac"/><path class="zuxjsnblj"/></g>`,
		"fallback": "iconmind:handle-resize-duotone-regular",
	});
}

export default Component;
