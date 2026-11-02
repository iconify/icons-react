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
		"content": `<style>.eczipabfd {
  d: path("M4 4v12h6V4Zm10 4v8h6V8Z");
}

.lp-9_abfj {
  stroke-opacity: 0.4;
  d: path("M3 20h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lp-9_abfj"/><path class="eczipabfd"/></g>`,
		"fallback": "coolicons:align-bottom-duocolor-sharp",
	});
}

export default Component;
