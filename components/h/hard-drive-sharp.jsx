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
		"content": `<style>.bvt8apb2v {
  d: path("M2 11L5 4L19 4L22 11L22 20L2 20L2 11ZM2 11L22 11");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ouw8s78nl {
  fill: currentColor;
  d: path("M19 15.5C19 16.3284 18.3284 17 17.5 17C16.6716 17 16 16.3284 16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="bvt8apb2v"/><path class="ouw8s78nl"/></g>`,
		"fallback": "keyline-icons:hard-drive-sharp",
	});
}

export default Component;
