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
		"content": `<style>.fa3bgacfd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11.389 2.2C11.749 1.93 12.251 1.93 12.611 2.2L21.611 9.15C21.856 9.34 22 9.64 22 9.95V21C22 21.55 21.552 22 21 22H3C2.448 22 2 21.55 2 21V9.95C2 9.64 2.144 9.34 2.389 9.15L11.389 2.2Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ptegs979q {
  d: path("M12 3L21 9.95V21H3V9.95L12 3Z");
}
</style><g class="gp_8x1bzb"><path class="fa3bgacfd"/><path class="ptegs979q"/></g>`,
		"fallback": "keyline-icons:home-play-sharp-two-tone",
	});
}

export default Component;
