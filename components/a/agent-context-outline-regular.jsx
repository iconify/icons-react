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
		"content": `<style>.jkpgw6k5z {
  d: path("M19.5 12H22v9h-2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qn5d-0b_j {
  d: path("M14.5 12H12v9h2.5");
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}
</style><g class="nrj6p8qat"><path class="skbifdbcx"/><path class="qn5d-0b_j"/><path class="jkpgw6k5z"/></g>`,
		"fallback": "iconmind:agent-context-outline-regular",
	});
}

export default Component;
