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
		"content": `<style>.ei_3wdi5i {
  d: path("M12 20a8 8 0 0 1 0 -16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nrlkc9bnf {
  d: path("M4 12a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.ymfnpaceh {
  d: path("m12 2 2.5 2.5L12 7");
}
</style><g class="nrj6p8qat"><path class="nrlkc9bnf"/><path class="ei_3wdi5i"/><path class="ymfnpaceh"/></g>`,
		"fallback": "iconmind:globe-spin-outline-regular",
	});
}

export default Component;
