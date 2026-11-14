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
		"content": `<style>.tpm53h8ug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 18.75a9 9 0 1 1 12.5 0M12 12.5L15.5 9M12 12.5h.01");
}
</style><path class="tpm53h8ug"/>`,
		"fallback": "uix:api-usage",
	});
}

export default Component;
