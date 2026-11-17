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

.dkzkc0zgg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-9v18m-9-9h18M6 6a10 10 0 0 1 0 12M18 6a10 10 0 0 0 0 12");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="bhwog2b5s"/><path class="dkzkc0zgg"/></g>`,
		"fallback": "coolicons:basketball-duotone",
	});
}

export default Component;
