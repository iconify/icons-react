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
		"content": `<style>.d38ys1g8f {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 16l7-12l7 12Zm0 4h14");
}

.ft5dv1b6b {
  fill: none;
}

.gsmo02b9v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m5 16l7-12l7 12Z");
}
</style><g class="ft5dv1b6b"><path class="gsmo02b9v"/><path class="d38ys1g8f"/></g>`,
		"fallback": "coolicons:eject-duotone-sharp",
	});
}

export default Component;
