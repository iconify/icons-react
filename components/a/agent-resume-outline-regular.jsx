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

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.x86sz9byo {
  d: path("M10 8v8l4 -4Z");
}
</style><g class="nrj6p8qat"><path class="ugdbidcqi"/><path class="x86sz9byo"/></g>`,
		"fallback": "iconmind:agent-resume-outline-regular",
	});
}

export default Component;
