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
		"content": `<style>.dck54u2is {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 12h-6v9h9v-6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g5gif86zm {
  d: path("M19 12h-6v9h9v-6");
}

.kosxb-loy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}
</style><g class="nrj6p8qat"><path class="kosxb-loy"/><path class="dck54u2is"/><path class="skbifdbcx"/><path class="g5gif86zm"/></g>`,
		"fallback": "iconmind:file-agent-duotone-regular",
	});
}

export default Component;
