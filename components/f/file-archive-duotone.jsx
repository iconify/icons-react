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

.lm1m17bnv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H7a2 2 0 0 0-2 2v16M19 9v10a2 2 0 0 1-2 2h-2M13 3l6 6m-6-6v4a2 2 0 0 0 2 2h4m-9-3h.01M8 8h.01M10 10h.01M8 12h.01M10 16a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2");
}

.xhpy6nagz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 18V5a2 2 0 0 1 2-2h6l.034.034q-.01-.01-.022-.004a.02.02 0 0 0-.012.018V7a2 2 0 0 0 2 2h3.952a.02.02 0 0 0 .018-.012q.006-.012-.004-.022L19 9v10a2 2 0 0 1-2 2h-2v-3a5 5 0 0 0-10 0");
}
</style><g class="ft5dv1b6b"><path class="xhpy6nagz"/><path class="lm1m17bnv"/></g>`,
		"fallback": "coolicons:file-archive-duotone",
	});
}

export default Component;
