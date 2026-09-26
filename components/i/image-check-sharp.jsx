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

.isy2lrdil {
  fill: currentColor;
  d: path("M9.5 7.5C9.5 8.3284 8.8284 9 8 9C7.1716 9 6.5 8.3284 6.5 7.5C6.5 6.6716 7.1716 6 8 6C8.8284 6 9.5 6.6716 9.5 7.5Z");
  stroke: none;
}

.y8w8t037n {
  d: path("M12 3L3 3L3 21L21 21L21 12M3 18L9 12L13 16L17 13L21 17M14.7071 5.7071L17 8L21.2929 3.7071");
}
</style><g class="gp_8x1bzb"><path class="y8w8t037n"/><path class="isy2lrdil"/></g>`,
		"fallback": "keyline-icons:image-check-sharp",
	});
}

export default Component;
