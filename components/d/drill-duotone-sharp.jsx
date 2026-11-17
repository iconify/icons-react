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
		"content": `<style>.fny-rrktg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h12v1h3v4h-3v1h-4v6h2v4H5v-4h2v-6H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.yqdi8rbix {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h12v6H3Zm4 6v6m4-6v6m-6 0h8v4H5ZM15 5h3v4h-3m3-2h3");
}
</style><g class="ft5dv1b6b"><path class="fny-rrktg"/><path class="yqdi8rbix"/></g>`,
		"fallback": "coolicons:drill-duotone-sharp",
	});
}

export default Component;
