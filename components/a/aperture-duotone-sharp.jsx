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
		"content": `<style>.aywpskbmc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m0 0l10-5M9 4l8 6m0-5v9m4-2l-10 5m4 3l-8-6m0 5v-9");
}

.ft5dv1b6b {
  fill: none;
}

.xj76bbbto {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2.786 8.107C4.936 3.02 10.804.639 15.892 2.788s7.469 8.016 5.32 13.104s-8.016 7.469-13.104 5.32S.637 13.195 2.786 8.107M13 7l-6 3v4l4 3l6-3v-4Z");
}
</style><g class="ft5dv1b6b"><path class="xj76bbbto"/><path class="aywpskbmc"/></g>`,
		"fallback": "coolicons:aperture-duotone-sharp",
	});
}

export default Component;
