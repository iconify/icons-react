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

.jcqnblbzb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h4a4 4 0 0 1 4 4v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4zM6 18h2v2H6Zm10 0h2v2h-2ZM4 12h16M8 15h.01M16 15h.01");
}

.knhj9xbzg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 3a4 4 0 0 1 4 4v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4Z");
}
</style><g class="ft5dv1b6b"><path class="knhj9xbzg"/><path class="jcqnblbzb"/></g>`,
		"fallback": "coolicons:coach-front-duotone-round",
	});
}

export default Component;
