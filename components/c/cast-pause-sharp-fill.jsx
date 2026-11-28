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

.kew2exbfm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 20C3 20.552 2.552 21 2 21C1.448 21 1 20.552 1 20C1 19.448 1.448 19 2 19C2.552 19 3 19.448 3 20Z");
  stroke: none;
}

.tfyq1v60x {
  d: path("M2 9V4H13M22 13V20H13M1 16H2C4.209 16 6 17.791 6 20V21M1 12H2C6.418 12 10 15.582 10 20V21M17 3V11M21 3V11");
}
</style><g class="gp_8x1bzb"><path class="tfyq1v60x"/><path clip-rule="evenodd" class="kew2exbfm"/></g>`,
		"fallback": "keyline-icons:cast-pause-sharp-fill",
	});
}

export default Component;
