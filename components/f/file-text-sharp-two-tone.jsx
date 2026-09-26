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

.h3auvd5wi {
  d: path("M14 2L4 2L4 22L20 22L20 8L14 2ZM14 2L14 8L20 8M7 13L13 13M7 17L17 17");
}

.vpyvtnijy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M14 1C14.2652 1 14.5196 1.1054 14.7071 1.2929L20.7071 7.2929C20.8946 7.4804 21 7.7348 21 8L21 22C21 22.5523 20.5523 23 20 23L4 23C3.4477 23 3 22.5523 3 22L3 2C3 1.4477 3.4477 1 4 1L14 1Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="vpyvtnijy"/><path class="h3auvd5wi"/></g>`,
		"fallback": "keyline-icons:file-text-sharp-two-tone",
	});
}

export default Component;
