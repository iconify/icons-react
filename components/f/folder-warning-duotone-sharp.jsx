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
		"content": `<style>.eext-rbov {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h7l2 2h9v14H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.s2x7znp4m {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h9v14H3V4h7zm0 4v3m0 3h.01");
}
</style><g class="ft5dv1b6b"><path class="eext-rbov"/><path class="s2x7znp4m"/></g>`,
		"fallback": "coolicons:folder-warning-duotone-sharp",
	});
}

export default Component;
