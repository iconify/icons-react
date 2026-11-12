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
		"content": `<style>.ela_ho3yc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 6c2.003-2.998 5.997-2.998 8 0c-1 1-3 2-4 2s-3-1-4-2M2 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0m14 0a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}

.ft5dv1b6b {
  fill: none;
}

.ghzgv_yuj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5 16c0-5 3-10 7-10m7 10c0-3-1-6-3-8m-4-2c2-3 6-3 8 0c-1 1-3 2-4 2s-3-1-4-2");
}
</style><g class="ft5dv1b6b"><path class="ela_ho3yc"/><path class="ghzgv_yuj"/></g>`,
		"fallback": "coolicons:git-cherry-pick-duotone-round",
	});
}

export default Component;
