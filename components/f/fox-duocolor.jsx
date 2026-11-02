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
		"content": `<style>.hwn02cc6z {
  stroke-opacity: 0.4;
  d: path("m9 12l1 1m5-1l-1 1m-2 3h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u5tlm46jl {
  d: path("m19 10l1 3l-7 7a1.414 1.414 0 0 1-2 0l-7-7l1-3V4c0-.369.631-.369 1 0l3 3c.64.64 1.36 1 2 1h2c.64 0 1.36-.36 2-1l3-3c.369-.369 1-.369 1 0z");
}
</style><g class="nrj6p8qat"><path class="hwn02cc6z"/><path class="u5tlm46jl"/></g>`,
		"fallback": "coolicons:fox-duocolor",
	});
}

export default Component;
