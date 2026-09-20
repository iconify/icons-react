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
		"content": `<style>.jw0q2-bgd {
  d: path("m14 12 3 3 3 -3");
}

.ld-eoubyi {
  fill: currentColor;
  d: path("M12 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p3hd3cb1e {
  d: path("M12 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}
</style><g class="nrj6p8qat"><path class="ld-eoubyi"/><path class="skbifdbcx"/><path class="p3hd3cb1e"/><path class="jw0q2-bgd"/></g>`,
		"fallback": "iconmind:agent-email-duotone-regular",
	});
}

export default Component;
