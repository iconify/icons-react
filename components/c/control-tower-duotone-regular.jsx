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
		"content": `<style>.aw1hg5bhd {
  fill: currentColor;
  d: path("M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e4mo_8b_s {
  d: path("M3 22h18");
}

.kbkdebbsh {
  d: path("M6 6.5h12");
}

.kx1g0kgjf {
  d: path("M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.m0x4m0pqo {
  d: path("M12 10v9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.olqfcgidt {
  d: path("M6 19h12");
}
</style><g class="nrj6p8qat"><path class="aw1hg5bhd"/><path class="kx1g0kgjf"/><path class="kbkdebbsh"/><path class="m0x4m0pqo"/><path class="olqfcgidt"/><path class="e4mo_8b_s"/></g>`,
		"fallback": "iconmind:control-tower-duotone-regular",
	});
}

export default Component;
