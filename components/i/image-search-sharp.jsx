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

.ueq-_ykop {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.5 7.5C9.5 8.328 8.828 9 8 9C7.172 9 6.5 8.328 6.5 7.5C6.5 6.672 7.172 6 8 6C8.828 6 9.5 6.672 9.5 7.5Z");
  stroke: none;
}

.y7yhfi-3p {
  d: path("M12 3H3V21H21V12M3 18L9 12L13 16L17 13L21 17M19.268 7.268L21.293 9.293M20 5.5C20 6.881 18.881 8 17.5 8C16.119 8 15 6.881 15 5.5C15 4.119 16.119 3 17.5 3C18.881 3 20 4.119 20 5.5Z");
}
</style><g class="gp_8x1bzb"><path class="y7yhfi-3p"/><path clip-rule="evenodd" class="ueq-_ykop"/></g>`,
		"fallback": "keyline-icons:image-search-sharp",
	});
}

export default Component;
