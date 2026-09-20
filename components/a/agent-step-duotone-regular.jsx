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
		"content": `<style>.dxqp15kpa {
  d: path("M8.69 8.37a4 4 0 1 1 -3.38 0");
}

.gntt6lljd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.69 8.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.klyrig6if {
  d: path("m14 7 5 5 -5 5");
}

.kt9ytgb-j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 7 5 5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="gntt6lljd"/><path class="kt9ytgb-j"/><path class="dxqp15kpa"/><path class="klyrig6if"/></g>`,
		"fallback": "iconmind:agent-step-duotone-regular",
	});
}

export default Component;
