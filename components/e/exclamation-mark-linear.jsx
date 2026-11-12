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
		"content": `<style>.azdzsac_a {
  stroke-linejoin: round;
  d: path("M12 22H12.0001");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tm82ehw_u {
  d: path("M12 2V15.3333");
}
</style><g class="ipq1z-bjh"><path class="tm82ehw_u"/><path class="azdzsac_a"/></g>`,
		"fallback": "solar:exclamation-mark-linear",
	});
}

export default Component;
