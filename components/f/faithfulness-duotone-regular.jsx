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
		"content": `<style>.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tes-pbkuy {
  d: path("M7 7h6v4l-3 3 -3 -3Z");
}

.xafrthbth {
  fill: currentColor;
  d: path("M7 7h6v4l-3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="xafrthbth"/><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="tes-pbkuy"/></g>`,
		"fallback": "iconmind:faithfulness-duotone-regular",
	});
}

export default Component;
