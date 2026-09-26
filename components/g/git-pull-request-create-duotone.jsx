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

.pi6c9vaae {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z");
  stroke: none;
}

.wvrco0-sf {
  d: path("M6 21L6 9M18 12L18 10C18 7.7909 16.2091 6 14 6L13 6M18.5 16L18.5 21M16 18.5L21 18.5");
}
</style><g class="nrj6p8qat"><path class="pi6c9vaae"/><path class="wvrco0-sf"/></g>`,
		"fallback": "keyline-icons:git-pull-request-create-duotone",
	});
}

export default Component;
