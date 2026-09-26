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

.s23v97oyx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M1.0809 10.6061L4.0809 3.6061C4.2384 3.2384 4.6 3 5 3L19 3C19.4 3 19.7616 3.2384 19.9191 3.6061L22.9191 10.6061C22.9725 10.7306 23 10.8646 23 11L23 20C23 20.5523 22.5523 21 22 21L2 21C1.4477 21 1 20.5523 1 20L1 11C1 10.8646 1.0275 10.7306 1.0809 10.6061Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="s23v97oyx"/><path class="bvt8apb2v"/><path class="ouw8s78nl"/></g>`,
		"fallback": "keyline-icons:hard-drive-sharp-two-tone",
	});
}

export default Component;
