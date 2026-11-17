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

.opqewac1a {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H9a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4m4-18l6 6m-6-6v4a2 2 0 0 0 2 2h4m2 10a4.472 4.472 0 0 1-8 0m3 0h-3v3m0-7a4.472 4.472 0 0 1 8 0m-3 0h3v-3");
}

.u-feg9-iu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 3l.034.034q-.01-.01-.022-.004a.02.02 0 0 0-.012.018V7c0 1.103.897 1.998 2 2h-2a4 4 0 0 0-4 4v8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z");
}
</style><g class="ft5dv1b6b"><path class="u-feg9-iu"/><path class="opqewac1a"/></g>`,
		"fallback": "coolicons:file-sync-corner-duotone-round",
	});
}

export default Component;
