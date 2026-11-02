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
		"content": `<style>.g3shigrbp {
  d: path("M12 13h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm-8 4h16M9 13v4m6-4v4");
}

.lt1qxne8j {
  stroke-opacity: 0.4;
  d: path("m4 9l16-4m-8 2v6m-2-9h.01M14 3h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lt1qxne8j"/><path class="g3shigrbp"/></g>`,
		"fallback": "coolicons:cable-car-alt-duocolor",
	});
}

export default Component;
