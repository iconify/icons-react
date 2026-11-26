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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p1ueh9bta {
  stroke-opacity: 0.4;
  d: path("M12 6.2L12 2M17.7728 10.2077L22.0011 8.8963M15.5678 16.6923L18.1808 20.1255M8.4322 16.6923L5.8192 20.1255M6.2272 10.2077L1.9989 8.8963");
}

.z_uawyb7i {
  d: path("M12 2.0004L18.1803 3.8717L22 8.8953L22 15.1047L18.1803 20.1283L12 21.9996L5.8197 20.1283L2 15.1047L2 8.8953L5.8197 3.8717ZM12 6.2L17.7728 10.2077L15.5678 16.6923L8.4322 16.6923L6.2272 10.2077Z");
}
</style><g class="gp_8x1bzb"><path class="p1ueh9bta"/><path class="z_uawyb7i"/></g>`,
		"fallback": "keyline-icons:dice-d12-sharp-duotone",
	});
}

export default Component;
