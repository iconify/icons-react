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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.lmdeqtb6z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 14a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14");
}

.pygr_2pot {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-7 0h7m4 0h7");
}
</style><g class="ft5dv1b6b"><path class="lmdeqtb6z"/><path class="pygr_2pot"/></g>`,
		"fallback": "coolicons:git-commit-duotone-round",
	});
}

export default Component;
