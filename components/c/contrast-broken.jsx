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
		"content": `<style>.fakyxgb8m {
  d: path("M12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2M12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.4709 20.6622 7M12 22V2M12 2C13.8214 2 15.5291 2.487 17 3.3378");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x31sw7b3p {
  d: path("M12 2L2 12M12 17L7.8883 21.1117M12 12L4.9353 19.0646M12 7L2.8883 16.1117");
}
</style><g class="ipq1z-bjh"><path class="fakyxgb8m"/><path class="x31sw7b3p"/></g>`,
		"fallback": "solar:contrast-broken",
	});
}

export default Component;
