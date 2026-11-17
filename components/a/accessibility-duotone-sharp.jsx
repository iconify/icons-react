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
		"content": `<style>.bhwog2b5s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 21a9 9 0 0 1-9-9a9 9 0 0 1 9-9a9 9 0 0 1 9 9a9 9 0 0 1-9 9");
}

.ft5dv1b6b {
  fill: none;
}

.t3z0vonch {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m8-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 4h10m-5 0v2l-3 3m3-3l3 3");
}
</style><g class="ft5dv1b6b"><path class="bhwog2b5s"/><path class="t3z0vonch"/></g>`,
		"fallback": "coolicons:accessibility-duotone-sharp",
	});
}

export default Component;
