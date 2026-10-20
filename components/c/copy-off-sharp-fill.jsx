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

.hpuop8bki {
  d: path("M2 2L2 16.0001L5 16M16 5L16.0001 2L6.6569 2M1.7071 1.7071L22.2929 22.2929");
}

.ulrztib2i {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M22.7071 22.7071C22.5198 22.8949 22.2653 23.0003 22 23L8 23C7.4477 23 7 22.5523 7 22L7 8C6.9997 7.7347 7.1051 7.4802 7.2929 7.2929L22.7071 22.7071ZM10.6569 7L22 7C22.5523 7 23 7.4477 23 8L23 19.3431L10.6569 7Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="ulrztib2i"/><path class="hpuop8bki"/></g>`,
		"fallback": "keyline-icons:copy-off-sharp-fill",
	});
}

export default Component;
