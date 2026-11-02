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
		"content": `<style>.cahe5o4vj {
  d: path("M4 7h16v14H4zm4 4h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.www2esbax {
  stroke-opacity: 0.4;
  d: path("M10 7V3h4v4M8 21v-5h8v5");
}
</style><g class="nrj6p8qat"><path class="www2esbax"/><path class="cahe5o4vj"/></g>`,
		"fallback": "coolicons:backpack-duocolor-sharp",
	});
}

export default Component;
