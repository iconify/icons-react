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
		"content": `<style>.camhvtqcl {
  d: path("M11 14h6v4h-6Z");
}

.f3r6jjb4a {
  d: path("M20 3v18");
}

.h6ny9xb7b {
  fill: currentColor;
  d: path("M7 7h10v4H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ll9bnb1gg {
  fill: currentColor;
  d: path("M11 14h6v4h-6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q7xe92bpy {
  d: path("M7 7h10v4H7Z");
}
</style><g class="nrj6p8qat"><path class="h6ny9xb7b"/><path class="ll9bnb1gg"/><path class="f3r6jjb4a"/><path class="q7xe92bpy"/><path class="camhvtqcl"/></g>`,
		"fallback": "iconmind:align-end-vertical-duotone-regular",
	});
}

export default Component;
