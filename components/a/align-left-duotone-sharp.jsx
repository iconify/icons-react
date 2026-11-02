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

.gxulj-d2r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 4v6H8V4Zm-4 10v6H8v-6Z");
}

.sleurabkh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 4h12v6H8Zm0 10h8v6H8ZM4 3v18");
}
</style><g class="ft5dv1b6b"><path class="gxulj-d2r"/><path class="sleurabkh"/></g>`,
		"fallback": "coolicons:align-left-duotone-sharp",
	});
}

export default Component;
