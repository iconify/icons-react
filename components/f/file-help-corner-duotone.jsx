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
		"content": `<style>.cjxy7gvrn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 3l.034.034q-.01-.01-.022-.004a.02.02 0 0 0-.012.018V7c0 1.103.897 1.998 2 2h-4a2 2 0 0 0-2 2v10H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z");
}

.ft5dv1b6b {
  fill: none;
}

.ildjeh0we {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2m4-18l6 6m-6-6v4a2 2 0 0 0 2 2h4m-4 7a2 2 0 1 1 2 2m0 3h.01");
}
</style><g class="ft5dv1b6b"><path class="cjxy7gvrn"/><path class="ildjeh0we"/></g>`,
		"fallback": "coolicons:file-help-corner-duotone",
	});
}

export default Component;
