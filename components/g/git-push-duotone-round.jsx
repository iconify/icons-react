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
		"content": `<style>.f2v3r3q4z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-2V3M9 6l3-3l3 3");
}

.ft5dv1b6b {
  fill: none;
}

.sltxuoywr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 20a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 20");
}
</style><g class="ft5dv1b6b"><path class="sltxuoywr"/><path class="f2v3r3q4z"/></g>`,
		"fallback": "coolicons:git-push-duotone-round",
	});
}

export default Component;
