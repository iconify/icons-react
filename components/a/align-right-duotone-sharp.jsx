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

.jrijk86fw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 4v6H4V4Zm0 10v6H8v-6Z");
}

.v4da9406y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h12v6H4Zm4 10h8v6H8ZM20 3v18");
}
</style><g class="ft5dv1b6b"><path class="jrijk86fw"/><path class="v4da9406y"/></g>`,
		"fallback": "coolicons:align-right-duotone-sharp",
	});
}

export default Component;
