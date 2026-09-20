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
		"content": `<style>.fc6vpebir {
  d: path("m20.5 9.5 -5 5");
}

.jy3t2qbob {
  d: path("M3 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.twzqi_bfd {
  d: path("m15.5 9.5 5 5");
}
</style><g class="nrj6p8qat"><path class="jy3t2qbob"/><path class="twzqi_bfd"/><path class="fc6vpebir"/></g>`,
		"fallback": "iconmind:approval-deny-outline-regular",
	});
}

export default Component;
