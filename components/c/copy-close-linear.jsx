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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kmh5_x81g {
  d: path("M15.7979 15.7981L13.4998 13.5M13.4998 13.5L11.2017 11.2019M13.4998 13.5L15.7979 11.2019M13.4998 13.5L11.2017 15.7981");
}

.omhvxckds {
  d: path("M12 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V11C21 8.17157 21 6.75736 20.1213 5.87868C19.2426 5 17.8284 5 15 5H12C9.17157 5 7.75736 5 6.87868 5.87868C6 6.75736 6 8.17157 6 11V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22Z");
}

.v0ldy8l7g {
  d: path("M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5");
}
</style><g class="ipq1z-bjh"><path class="omhvxckds"/><path class="v0ldy8l7g"/><path class="kmh5_x81g"/></g>`,
		"fallback": "solar:copy-close-linear",
	});
}

export default Component;
