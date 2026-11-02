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

.n19xo3b9b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}

.nfjk49b3h {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 18L7 6l4 12m-6-4h4m6 1a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6-3v6");
}
</style><g class="ft5dv1b6b"><path class="n19xo3b9b"/><path class="nfjk49b3h"/></g>`,
		"fallback": "coolicons:case-sensitive-duotone-sharp",
	});
}

export default Component;
