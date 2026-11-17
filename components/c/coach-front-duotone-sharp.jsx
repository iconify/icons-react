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

.ix9nbjbaz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 18V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v11zm2 0h2v2H6Zm10 0h2v2h-2ZM4 12h16M8 15h.01M16 15h.01");
}

.ma9mt_gho {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v11H4Z");
}
</style><g class="ft5dv1b6b"><path class="ma9mt_gho"/><path class="ix9nbjbaz"/></g>`,
		"fallback": "coolicons:coach-front-duotone-sharp",
	});
}

export default Component;
