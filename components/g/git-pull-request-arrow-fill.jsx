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
		"content": `<style>.c8xmd3p7d {
  fill: currentColor;
  d: path("M10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6ZM10 18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14C8.20914 14 10 15.7909 10 18Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ttid3ebll {
  d: path("M6 9V15C6 13.34315 7.34315 12 9 12H15C16.65685 12 18 10.65685 18 9V4M16 5.7929L17.64645 4.1465C17.84171 3.9512 18.15829 3.9512 18.35355 4.1465L20 5.7929");
}
</style><g class="nrj6p8qat"><path class="ttid3ebll"/><path class="c8xmd3p7d"/></g>`,
		"fallback": "keyline-icons:git-pull-request-arrow-fill",
	});
}

export default Component;
