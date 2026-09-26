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

.r1wx7gbmu {
  fill: currentColor;
  d: path("M6.5 22C4.1528 22 2 19.8472 2 17.5C2 15.1528 4.1528 13 6.5 13C8.8472 13 11 15.1528 11 17.5C11 19.8472 8.8472 22 6.5 22ZM6.5 11C4.1528 11 2 8.8472 2 6.5C2 4.1528 4.1528 2 6.5 2C8.8472 2 11 4.1528 11 6.5C11 8.8472 8.8472 11 6.5 11ZM17.5 11C15.1528 11 13 8.8472 13 6.5C13 4.1528 15.1528 2 17.5 2C19.8472 2 22 4.1528 22 6.5C22 8.8472 19.8472 11 17.5 11Z");
  stroke: none;
}

.ybne7tbev {
  d: path("M13.7035 17.1823L16.3333 20L21.2689 14.7118");
}
</style><g class="gp_8x1bzb"><path class="r1wx7gbmu"/><path class="ybne7tbev"/></g>`,
		"fallback": "keyline-icons:grid-circles-check-sharp-fill",
	});
}

export default Component;
