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
		"content": `<style>.d1spiws2m {
  d: path("M5.5 22L5.5 11M18 16L18 6L11 6M2.7071 2.7071L8.2929 8.2929M8.2929 2.7071L2.7071 8.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p55l08o4q {
  fill: currentColor;
  d: path("M18 14C20.0711 14 22 15.9289 22 18C22 20.0711 20.0711 22 18 22C15.9289 22 14 20.0711 14 18C14 15.9289 15.9289 14 18 14Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="d1spiws2m"/><path class="p55l08o4q"/></g>`,
		"fallback": "keyline-icons:git-merge-conflict-sharp-fill",
	});
}

export default Component;
