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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rrhhdyigh {
  fill: currentColor;
  d: path("M6 15a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.unyu66b5a {
  d: path("M6 15a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.virxq9kun {
  d: path("M15 3v5");
}

.x_7wq3p0y {
  d: path("M9 3v5");
}
</style><g class="nrj6p8qat"><path class="rrhhdyigh"/><path class="unyu66b5a"/><path class="x_7wq3p0y"/><path class="virxq9kun"/></g>`,
		"fallback": "iconmind:cold-start-duotone-regular",
	});
}

export default Component;
