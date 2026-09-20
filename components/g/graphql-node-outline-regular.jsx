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
		"content": `<style>.enrpg0aoq {
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.fnf6pdbdu {
  d: path("M12 3v6");
}

.g4q4atb2q {
  d: path("M14.5 14.5 19 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oxc7qdbky {
  d: path("M9.5 14.5 5 19");
}
</style><g class="nrj6p8qat"><path class="enrpg0aoq"/><path class="fnf6pdbdu"/><path class="oxc7qdbky"/><path class="g4q4atb2q"/></g>`,
		"fallback": "iconmind:graphql-node-outline-regular",
	});
}

export default Component;
