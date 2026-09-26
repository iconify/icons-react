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
		"content": `<style>.nl5dv7buo {
  fill: currentColor;
  d: path("M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vj41ir4dn {
  d: path("M3 12H9M15 12H21");
}
</style><g class="nrj6p8qat"><path class="vj41ir4dn"/><path class="nl5dv7buo"/></g>`,
		"fallback": "keyline-icons:git-commit-horizontal-fill",
	});
}

export default Component;
