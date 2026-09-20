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
		"content": `<style>.be64fvbve {
  fill: currentColor;
  d: path("M13 6a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dv0yclbdu {
  d: path("M13 6a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
}

.eb5zxsbop {
  d: path("M4 5a2 2 0 0 1 4 0v3a2 2 0 0 1 -4 0Zm0 3c0 6 6 12 12 12m0 0a2 2 0 0 0 4 0v-3a2 2 0 0 0 -4 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="be64fvbve"/><path class="eb5zxsbop"/><path class="dv0yclbdu"/></g>`,
		"fallback": "iconmind:helpline-duotone-regular",
	});
}

export default Component;
