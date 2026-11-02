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

.ftqfbqbex {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 20a4.24 4.24 0 0 1-6 0l-5-5a4.24 4.24 0 0 1 0-6l5-5a4.24 4.24 0 0 1 6 0l5 5a4.24 4.24 0 0 1 0 6Z");
}

.x0gw-9boc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 18l-2 2a4.243 4.243 0 0 1-6 0l-5-5a4.243 4.243 0 0 1 0-6l5-5a4.243 4.243 0 0 1 6 0l5 5a4.243 4.243 0 0 1 0 6zM12 8h.01M12 11v4");
}
</style><g class="ft5dv1b6b"><path class="ftqfbqbex"/><path class="x0gw-9boc"/></g>`,
		"fallback": "coolicons:diamond-info-duotone-round",
	});
}

export default Component;
