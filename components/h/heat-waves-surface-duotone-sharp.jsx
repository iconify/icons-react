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

.rbi_vwk6n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 17h18v4H3Z");
}

.zp06szbdb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17h18v4H3Zm4-4q2.221-2.5 0-5t0-5m5 10q2.221-2.5 0-5t0-5m5 10q2.222-2.5 0-5t0-5");
}
</style><g class="ft5dv1b6b"><path class="rbi_vwk6n"/><path class="zp06szbdb"/></g>`,
		"fallback": "coolicons:heat-waves-surface-duotone-sharp",
	});
}

export default Component;
