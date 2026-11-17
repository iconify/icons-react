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

.qaer7cb8q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H7M5 7v12a2 2 0 0 0 2 2h10c.552 0 1.052-.224 1.414-.586M19 15V9m-6-6l6 6m-6-6v4a2 2 0 0 0 2 2h4M2 4l18 18");
}

.sbg07cg-e {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 3l6 6v6L7 3Zm5.414 17.414c-.378.378-.88.589-1.414.586H7a2.003 2.003 0 0 1-2-2V7Z");
}
</style><g class="ft5dv1b6b"><path class="sbg07cg-e"/><path class="qaer7cb8q"/></g>`,
		"fallback": "coolicons:file-off-duotone",
	});
}

export default Component;
