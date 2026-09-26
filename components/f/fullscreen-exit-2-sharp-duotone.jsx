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

.kypg14bve {
  stroke-opacity: 0.4;
  d: path("M22 10L14 10L14 2");
}

.o8857ob4w {
  d: path("M2 14L10 14L10 22");
}
</style><g class="gp_8x1bzb"><path class="kypg14bve"/><path class="o8857ob4w"/></g>`,
		"fallback": "keyline-icons:fullscreen-exit-2-sharp-duotone",
	});
}

export default Component;
