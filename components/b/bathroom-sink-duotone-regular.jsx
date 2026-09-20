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
		"content": `<style>.esh17sbch {
  d: path("M7 12V7h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o9tsjsyel {
  fill: currentColor;
  d: path("M4 12h16a10 10 0 0 1 -16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vhf3_kexp {
  d: path("M12 16v5");
}

.zk_4bjb4m {
  d: path("M4 12h16a10 10 0 0 1 -16 0");
}
</style><g class="nrj6p8qat"><path class="o9tsjsyel"/><path class="zk_4bjb4m"/><path class="esh17sbch"/><path class="vhf3_kexp"/></g>`,
		"fallback": "iconmind:bathroom-sink-duotone-regular",
	});
}

export default Component;
