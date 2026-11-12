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
		"content": `<style>.aamgpqbza {
  d: path("M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12");
}

.d15e38t2g {
  stroke-linejoin: round;
  d: path("M13 11L22 2M22 7.34375V2H16.6562");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><path class="d15e38t2g"/><path class="aamgpqbza"/></g>`,
		"fallback": "solar:circle-top-up-linear",
	});
}

export default Component;
